// Client-side API service proxying to backend /api routes
// All Gemini API calls remain server-side to ensure API key security

export interface GroundingSource {
  title: string;
  url: string;
}

export interface MapPlace {
  title: string;
  url: string;
  snippet?: string;
}

export interface SearchGroundingResponse {
  text: string;
  sources: GroundingSource[];
}

export interface MapsGroundingResponse {
  text: string;
  places: MapPlace[];
}

export interface ChatResponse {
  text: string;
  sources?: GroundingSource[];
}

export async function getChatResponse(
  history: { role: 'user' | 'model'; parts?: { text: string }[]; text?: string }[]
): Promise<string> {
  try {
    const lastUserMessage = history[history.length - 1]?.parts?.[0]?.text || history[history.length - 1]?.text || '';
    const previousHistory = history.slice(0, -1).map((h) => ({
      role: h.role,
      text: h.parts?.[0]?.text || h.text || '',
    }));

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: lastUserMessage,
        history: previousHistory,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Server responded with status ${res.status}`);
    }

    const data: ChatResponse = await res.json();
    return data.text || 'Welcome to Sun Studio Tan! How may I assist your glow today?';
  } catch (error) {
    console.error('Chat error:', error);
    return 'Thank you for reaching out to Sun Studio Tan. For immediate appointments and queries, please visit https://book.sunstudiotan.com/ or call us at 614.333.0051.';
  }
}

export async function querySearchGrounding(prompt: string): Promise<SearchGroundingResponse> {
  const res = await fetch('/api/search-grounding', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Failed to fetch search-grounded guidance.');
  }

  return res.json();
}

export async function queryMapsGrounding(
  query: string,
  latitude?: number,
  longitude?: number
): Promise<MapsGroundingResponse> {
  const res = await fetch('/api/maps-grounding', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, latitude, longitude }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Failed to fetch Google Maps studio information.');
  }

  return res.json();
}

export async function generateVeoVideo(
  imageBase64: string,
  mimeType: string,
  prompt: string,
  aspectRatio: '16:9' | '9:16'
): Promise<{ operationName: string }> {
  const res = await fetch('/api/generate-video', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageBase64, mimeType, prompt, aspectRatio }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Failed to start Veo video generation.');
  }

  return res.json();
}

export async function checkVideoStatus(operationName: string): Promise<{ done: boolean; error: string | null }> {
  const res = await fetch('/api/video-status', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ operationName }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Failed to check video status.');
  }

  return res.json();
}

export async function downloadVeoVideo(operationName: string): Promise<{ videoDataUrl: string }> {
  const res = await fetch('/api/video-download', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ operationName }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Failed to retrieve generated video.');
  }

  return res.json();
}
