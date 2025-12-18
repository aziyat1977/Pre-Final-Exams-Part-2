
import React, { useState, useRef } from 'react';
import { Mic, Square, Play, Download, Trash2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const SpeakingRecorder: React.FC<{ questionId: number }> = ({ questionId }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Microphone access denied. Please enable permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const deleteRecording = () => {
    setAudioBlob(null);
    setAudioUrl(null);
  };

  const downloadRecording = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = `wrielts-speaking-q${questionId}-${new Date().toISOString().slice(0,10)}.webm`;
      a.click();
    }
  };

  return (
    <div className="mt-4 p-4 bg-black/40 rounded-2xl border border-white/10 flex flex-col items-center gap-4">
      {error && (
        <div className="text-red-400 text-sm flex items-center gap-2 bg-red-500/10 p-2 rounded-lg">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <div className="flex gap-4">
        {!isRecording && !audioUrl && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={startRecording}
            className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            <Mic className="text-white w-8 h-8" />
          </motion.button>
        )}

        {isRecording && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={stopRecording}
            className="w-16 h-16 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center border-2 border-red-500 animate-pulse"
          >
            <Square className="text-white w-6 h-6 fill-current" />
          </motion.button>
        )}

        {audioUrl && (
          <div className="flex gap-2">
             <audio src={audioUrl} controls className="h-12 w-48 rounded-full" />
             <button onClick={downloadRecording} className="p-3 bg-brand-500 rounded-full hover:bg-brand-400 text-white">
                <Download size={20} />
             </button>
             <button onClick={deleteRecording} className="p-3 bg-white/10 rounded-full hover:bg-red-500/20 hover:text-red-400 text-gray-400 transition-colors">
                <Trash2 size={20} />
             </button>
          </div>
        )}
      </div>
      
      <div className="text-xs text-gray-400 font-mono uppercase tracking-widest">
        {isRecording ? <span className="text-red-400">Recording...</span> : audioUrl ? "Ready to Review" : "Tap to Record"}
      </div>
    </div>
  );
};
