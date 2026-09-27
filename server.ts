import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

// Increase payload limit for image uploads used in video generation
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Helper for Google GenAI client
function getGenAI(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is missing.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// ----------------------------------------------------
// 1. Google Search Grounding API (gemini-3.5-flash)
// ----------------------------------------------------
app.post('/api/search-grounding', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const ai = getGenAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction:
          'You are a high-end beauty, sunless tanning, and skincare consultant for Sun Studio Tan located in Columbus, Ohio. Provide accurate, up-to-date information, weather forecasts, and skincare advice grounded in Google Search.',
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || '';
    const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const searchSources: { title: string; url: string }[] = [];

    for (const chunk of rawChunks as any[]) {
      if (chunk.web?.uri) {
        let title = chunk.web.title;
        if (!title) {
          try {
            title = new URL(chunk.web.uri).hostname.replace('www.', '');
          } catch {
            title = 'Web Source';
          }
        }
        searchSources.push({
          title,
          url: chunk.web.uri,
        });
      }
    }

    res.json({ text, sources: searchSources });
  } catch (error: any) {
    console.error('Search grounding error:', error);
    res.status(500).json({ error: error.message || 'Failed to query search grounding' });
  }
});

// ----------------------------------------------------
// 2. Google Maps Grounding API (gemini-3.5-flash)
// ----------------------------------------------------
app.post('/api/maps-grounding', async (req, res) => {
  try {
    const { query, latitude, longitude } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    const ai = getGenAI();

    const toolConfig =
      latitude && longitude && !isNaN(Number(latitude)) && !isNaN(Number(longitude))
        ? {
            retrievalConfig: {
              latLng: {
                latitude: Number(latitude),
                longitude: Number(longitude),
              },
            },
          }
        : undefined;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `Regarding Sun Studio Tan in Columbus, Ohio (Short North / Downtown Columbus) and surrounding area: ${query}`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig,
      },
    });

    const text = response.text || '';
    const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const mapsSources: { title: string; url: string; snippet?: string }[] = [];

    for (const chunk of rawChunks as any[]) {
      if (chunk.maps?.uri) {
        const snippets = chunk.maps?.placeAnswerSources?.reviewSnippets;
        const firstSnippet =
          Array.isArray(snippets) && snippets.length > 0
            ? snippets[0].content || snippets[0].text
            : undefined;

        mapsSources.push({
          title: chunk.maps?.title || 'Google Maps Location',
          url: chunk.maps?.uri,
          snippet: firstSnippet,
        });
      }
    }

    res.json({ text, places: mapsSources });
  } catch (error: any) {
    console.error('Maps grounding error:', error);
    res.status(500).json({ error: error.message || 'Failed to query maps grounding' });
  }
});

// ----------------------------------------------------
// 3. Veo Video Generation API (veo-3.1-fast-generate-preview)
// ----------------------------------------------------
app.post('/api/generate-video', async (req, res) => {
  try {
    const {
      imageBase64,
      mimeType = 'image/jpeg',
      prompt = 'Smooth gentle camera orbit with radiant sun-kissed lighting, glowing skin, subtle motion',
      aspectRatio = '9:16',
    } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image base64 data is required' });
    }

    const ai = getGenAI();
    // Strip data url scheme if present
    const cleanBytes = imageBase64.replace(/^data:image\/[a-zA-Z+]+;base64,/, '');

    const targetRatio = aspectRatio === '16:9' ? '16:9' : '9:16';

    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'Gentle cinematic motion highlighting flawless bronze radiance and soft ambient sunlight',
      image: {
        imageBytes: cleanBytes,
        mimeType: mimeType || 'image/jpeg',
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: targetRatio,
      },
    });

    res.json({ operationName: operation.name });
  } catch (error: any) {
    console.error('Veo video generation error:', error);
    res.status(500).json({ error: error.message || 'Failed to start video generation' });
  }
});

app.post('/api/video-status', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'operationName is required' });
    }

    const ai = getGenAI();
    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });

    res.json({
      done: Boolean(updated.done),
      error: updated.error ? updated.error.message || JSON.stringify(updated.error) : null,
    });
  } catch (error: any) {
    console.error('Veo video status error:', error);
    res.status(500).json({ error: error.message || 'Failed to retrieve video status' });
  }
});

app.post('/api/video-download', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'operationName is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Missing GEMINI_API_KEY' });
    }

    const ai = getGenAI();
    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });

    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) {
      return res.status(404).json({ error: 'Generated video URI not ready or not found' });
    }

    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey },
    });

    if (!videoRes.ok) {
      return res.status(videoRes.status).json({ error: 'Failed to download video stream from storage' });
    }

    const arrayBuffer = await videoRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString('base64');

    res.json({ videoDataUrl: `data:video/mp4;base64,${base64}` });
  } catch (error: any) {
    console.error('Veo video download error:', error);
    res.status(500).json({ error: error.message || 'Failed to download video' });
  }
});

// ----------------------------------------------------
// 4. Studio AI Chatbot with Google Search Grounding
// ----------------------------------------------------
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getGenAI();
    const contents = [
      ...history.map((h: any) => ({
        role: h.role,
        parts: [{ text: h.text || h.parts?.[0]?.text || '' }],
      })),
      {
        role: 'user',
        parts: [{ text: message }],
      },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents,
      config: {
        systemInstruction:
          'You are the concierge for Sun Studio Tan, a premier sunless tanning & teeth whitening salon in Columbus, Ohio (Short North). You are warm, knowledgeable, and elegant. Mention unlimited memberships start at $24.99/mo and booking is at https://book.sunstudiotan.com/. Use Google Search when asked for live weather, directions, UV, or recent events.',
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "I'm glad to assist you at Sun Studio Tan!";
    const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const searchSources = (rawChunks as any[])
      .filter((c: any) => c.web?.uri)
      .map((c: any) => ({
        title: c.web?.title || 'Source',
        url: c.web?.uri,
      }));

    res.json({ text, sources: searchSources });
  } catch (error: any) {
    console.error('Chat error:', error);
    res.status(500).json({ error: error.message || 'Failed to generate chat response' });
  }
});

// ----------------------------------------------------
// 5. Development Vite Middleware / Production Static Serve
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sun Studio Tan server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
