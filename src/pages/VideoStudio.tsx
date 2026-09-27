import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  Video, 
  Sparkles, 
  Film, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Smartphone, 
  Monitor,
  Camera,
  Play
} from 'lucide-react';
import { generateVeoVideo, checkVideoStatus, downloadVeoVideo } from '../services/geminiService';

interface VideoStudioProps {
  onNavigateToBook: () => void;
}

const PRESET_PROMPTS = [
  'Gentle golden hour sunlight flare with warm camera orbit and glowing skin radiance',
  'Luxury bridal slow-motion portrait with soft ambient shimmer and delicate hair flutter',
  'Studio beauty rotation with cinematic warm rim lighting and natural bronze luminance',
  'Sunset seaside glow with subtle ocean breeze and fluid camera dolly movement'
];

const SAMPLE_IMAGES = [
  {
    title: 'Bridal Radiance',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    desc: 'Soft contour bridal styling'
  },
  {
    title: 'Golden Hour Glow',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    desc: 'Sun-drenched natural tan'
  },
  {
    title: 'Studio Luxury Bronze',
    url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800',
    desc: 'High-contrast studio definition'
  }
];

export default function VideoStudio({ onNavigateToBook }: VideoStudioProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(SAMPLE_IMAGES[0].url);
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9'>('9:16');
  const [prompt, setPrompt] = useState<string>(PRESET_PROMPTS[0]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationStage, setGenerationStage] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Convert image URL or file to base64
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please upload a valid image file (JPG, PNG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setSelectedImage(reader.result);
        setGeneratedVideoUrl(null);
        setErrorMessage(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleStartGeneration = async () => {
    if (!selectedImage) {
      setErrorMessage('Please select or upload a photo first.');
      return;
    }

    setIsGenerating(true);
    setErrorMessage(null);
    setGeneratedVideoUrl(null);
    setProgressPercent(10);
    setGenerationStage('Preparing photo contours & lighting map...');

    try {
      // Determine mimeType and base64 string
      let imageBase64 = selectedImage;
      let mimeType = 'image/jpeg';

      if (selectedImage.startsWith('http')) {
        setGenerationStage('Fetching sample photo...');
        const res = await fetch(selectedImage);
        const blob = await res.blob();
        mimeType = blob.type || 'image/jpeg';
        const buffer = await blob.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        imageBase64 = `data:${mimeType};base64,${btoa(binary)}`;
      } else if (selectedImage.startsWith('data:')) {
        const match = selectedImage.match(/^data:(image\/[a-zA-Z+]+);base64,/);
        if (match) {
          mimeType = match[1];
        }
      }

      setGenerationStage('Initiating Veo video synthesis (veo-3.1-fast-generate-preview)...');
      setProgressPercent(25);

      const { operationName } = await generateVeoVideo(imageBase64, mimeType, prompt, aspectRatio);

      setGenerationStage('Synthesizing frames & camera motion vectors with Veo...');
      setProgressPercent(40);

      // Poll every 5 seconds until done
      let attempts = 0;
      const maxAttempts = 60; // 5 minutes max

      const pollInterval = setInterval(async () => {
        attempts++;
        const currentProgress = Math.min(40 + attempts * 2, 92);
        setProgressPercent(currentProgress);

        if (attempts === 5) {
          setGenerationStage('Illuminating sun-kissed lighting highlights...');
        } else if (attempts === 10) {
          setGenerationStage('Refining smooth motion interpolation & skin depth...');
        } else if (attempts === 18) {
          setGenerationStage('Polishing radiant video render...');
        }

        try {
          const status = await checkVideoStatus(operationName);

          if (status.error) {
            clearInterval(pollInterval);
            setIsGenerating(false);
            setErrorMessage(`Video generation error: ${status.error}`);
            return;
          }

          if (status.done) {
            clearInterval(pollInterval);
            setProgressPercent(95);
            setGenerationStage('Downloading high-definition video...');

            const downloadResult = await downloadVeoVideo(operationName);
            setProgressPercent(100);
            setGeneratedVideoUrl(downloadResult.videoDataUrl);
            setIsGenerating(false);
          } else if (attempts >= maxAttempts) {
            clearInterval(pollInterval);
            setIsGenerating(false);
            setErrorMessage('Video generation timed out. Please try again with a lighter prompt.');
          }
        } catch (pollErr: any) {
          console.error('Polling error:', pollErr);
        }
      }, 5000);

    } catch (err: any) {
      console.error('Video generation initiation failed:', err);
      setIsGenerating(false);
      setErrorMessage(err.message || 'Unable to generate video at this moment. Please check your connection or try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white pt-28 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs tracking-[0.25em] uppercase font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Motion Studio • Veo Fast Generation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif italic mb-6 tracking-tight text-white">
            Animate Your Glow into Motion
          </h1>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Transform any photo into a mesmerizing, cinematic video using next-generation <span className="text-amber-300 font-medium">Veo</span> video generation. Perfect for showing off your flawless sunless tan, bridal contour, or studio brilliance on Instagram Stories, Reels, and TikTok.
          </p>
        </div>

        {/* Main Studio Workspace Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Configuration Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-8 bg-stone-950/70 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            {/* 1. Photo Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs tracking-[0.2em] uppercase font-bold text-amber-300 flex items-center gap-2">
                  <Camera className="w-4 h-4" /> 1. Upload or Select Photo
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs text-white/70 hover:text-white underline cursor-pointer"
                >
                  Browse Device
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileUpload}
                className="hidden"
              />

              {/* Upload Dropzone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/20 hover:border-amber-400/50 rounded-xl p-5 text-center cursor-pointer transition-colors bg-white/[0.02] hover:bg-white/[0.05] group"
              >
                <Upload className="w-8 h-8 text-amber-300/70 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-xs text-white/80 font-medium">Click to upload your portrait or tan photo</p>
                <p className="text-[10px] text-white/40 mt-1">Supports PNG, JPG, or WebP</p>
              </div>

              {/* Presets Grid */}
              <div className="mt-4">
                <p className="text-[11px] text-white/50 mb-2 uppercase tracking-wider font-medium">Or choose a studio sample:</p>
                <div className="grid grid-cols-3 gap-2">
                  {SAMPLE_IMAGES.map((sample, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedImage(sample.url);
                        setGeneratedVideoUrl(null);
                      }}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImage === sample.url ? 'border-amber-400 scale-[1.02] shadow-lg shadow-amber-500/20' : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={sample.url} alt={sample.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1 left-1 right-1 text-[9px] font-medium truncate text-white drop-shadow">
                        {sample.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Aspect Ratio Selector */}
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase font-bold text-amber-300 mb-3 flex items-center gap-2">
                <Video className="w-4 h-4" /> 2. Aspect Ratio Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAspectRatio('9:16')}
                  className={`flex items-center justify-center gap-3 p-3.5 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    aspectRatio === '9:16'
                      ? 'bg-amber-400 text-black border-amber-300 shadow-md shadow-amber-500/10'
                      : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-white/30'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>9:16 Portrait</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAspectRatio('16:9')}
                  className={`flex items-center justify-center gap-3 p-3.5 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    aspectRatio === '16:9'
                      ? 'bg-amber-400 text-black border-amber-300 shadow-md shadow-amber-500/10'
                      : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-white/30'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                  <span>16:9 Landscape</span>
                </button>
              </div>
              <p className="text-[11px] text-white/40 mt-2">
                {aspectRatio === '9:16' ? 'Recommended for Instagram Reels, Stories & TikTok.' : 'Cinematic widescreen for web display and YouTube.'}
              </p>
            </div>

            {/* 3. Motion Prompt Styling */}
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase font-bold text-amber-300 mb-2 flex items-center gap-2">
                <Film className="w-4 h-4" /> 3. Cinematic Motion Style
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition-colors resize-none leading-relaxed"
                placeholder="Describe desired motion, lighting, and camera movement..."
              />

              <div className="mt-2 space-y-1.5">
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Quick Style Presets:</p>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_PROMPTS.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPrompt(p)}
                      className={`text-[10px] px-2.5 py-1 rounded-md border text-left transition-colors cursor-pointer ${
                        prompt === p ? 'bg-amber-400/20 text-amber-300 border-amber-400/40' : 'bg-white/5 text-white/60 border-white/10 hover:text-white'
                      }`}
                    >
                      {idx === 0 && '✨ Golden Hour Flare'}
                      {idx === 1 && '👰 Bridal Shimmer'}
                      {idx === 2 && '🌟 Studio Rotation'}
                      {idx === 3 && '🌊 Seaside Breeze'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generate Action Button */}
            <button
              type="button"
              onClick={handleStartGeneration}
              disabled={isGenerating || !selectedImage}
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-[0.25em] text-xs flex items-center justify-center gap-3 transition-all cursor-pointer ${
                isGenerating
                  ? 'bg-amber-500/40 text-black cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-black hover:brightness-110 shadow-lg shadow-amber-500/20'
              }`}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  <span>Synthesizing Video...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black" />
                  <span>Generate Veo Video</span>
                </>
              )}
            </button>

            {errorMessage && (
              <div className="flex items-start gap-3 p-3.5 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>{errorMessage}</p>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Stage & Video Player (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950/70 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm flex flex-col items-center justify-center min-h-[550px]">
            <AnimatePresence mode="wait">
              {/* State A: Currently Generating Video */}
              {isGenerating ? (
                <motion.div
                  key="generating"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-md text-center py-12 space-y-6"
                >
                  <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-amber-400/20 animate-ping" />
                    <div className="w-20 h-20 rounded-full border-4 border-amber-400 border-t-transparent animate-spin flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-amber-300 animate-pulse" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif italic text-white mb-2">Generating Cinematic Motion</h3>
                    <p className="text-xs text-amber-300 font-mono tracking-wider">{generationStage}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full"
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/40 uppercase tracking-widest font-mono">
                    <span>Model: veo-3.1-fast-generate-preview</span>
                    <span>{progressPercent}%</span>
                  </div>

                  <p className="text-xs text-white/50 italic leading-relaxed pt-4 border-t border-white/10">
                    "Crafting authentic lighting, camera motion, and skin depth. High-fidelity video generation typically takes 45–90 seconds."
                  </p>
                </motion.div>
              ) : generatedVideoUrl ? (
                /* State B: Generated Video Result Ready */
                <motion.div
                  key="video-ready"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Veo Video Generation Complete</span>
                    </div>
                    <span className="text-xs font-mono text-white/50">{aspectRatio}</span>
                  </div>

                  {/* Video Player */}
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-2xl border border-amber-400/30 bg-black flex items-center justify-center ${
                      aspectRatio === '9:16' ? 'w-full max-w-[340px] aspect-[9/16]' : 'w-full max-w-xl aspect-[16/9]'
                    }`}
                  >
                    <video
                      src={generatedVideoUrl}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Actions */}
                  <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <a
                      href={generatedVideoUrl}
                      download={`sun-studio-${aspectRatio.replace(':', 'x')}-glow.mp4`}
                      className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Video (MP4)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setGeneratedVideoUrl(null)}
                      className="w-full sm:w-auto px-6 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Render Another Look</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* State C: Idle Image Preview Ready to Generate */
                <motion.div
                  key="idle-preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full flex flex-col items-center text-center"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40 font-semibold mb-4">
                    Photo Input Preview
                  </p>

                  <div
                    className={`relative rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black ${
                      aspectRatio === '9:16' ? 'w-full max-w-[300px] aspect-[9/16]' : 'w-full max-w-lg aspect-[16/9]'
                    }`}
                  >
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-white/30 p-6">
                        <Camera className="w-12 h-12 mb-3 stroke-[1.2]" />
                        <p className="text-xs">No image chosen yet</p>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 bg-black/70 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-amber-300 border border-white/10">
                      {aspectRatio}
                    </div>
                  </div>

                  <p className="text-xs text-white/50 max-w-md mt-6 leading-relaxed">
                    Click <strong className="text-white font-medium">"Generate Veo Video"</strong> to animate this portrait with subtle camera motion, natural sunlight shimmer, and flawless tan radiance.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-24 border-t border-white/10 pt-16 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
            <Sparkles className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="text-base font-serif italic text-white mb-2">veo-3.1-fast-generate-preview</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Google DeepMind's specialized fast preview video generation, delivering fluid motion vectors in seconds.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
            <Smartphone className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="text-base font-serif italic text-white mb-2">9:16 & 16:9 Ratios</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Tailored for modern social reels or widescreen presentations. Perfect for showcasing bridal glow before the big day.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
            <Film className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="text-base font-serif italic text-white mb-2">Real Studio Results</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Capture your spray tan or teeth whitening brilliance and see it come alive under natural ambient sunlight.
            </p>
          </div>
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-950/40 via-stone-900/60 to-amber-950/40 border border-amber-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-serif italic text-white mb-3">Ready for your real-world glow?</h3>
          <p className="text-xs text-white/60 mb-6 max-w-xl mx-auto">
            Experience our 98°F heated spray tan booths or professional teeth whitening in our Columbus studio.
          </p>
          <button
            type="button"
            onClick={onNavigateToBook}
            className="px-8 py-3.5 bg-white hover:bg-stone-200 text-black font-bold uppercase tracking-[0.25em] text-xs rounded-xl transition-all cursor-pointer"
          >
            Book Studio Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
