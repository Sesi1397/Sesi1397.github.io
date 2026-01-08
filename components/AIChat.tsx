
import React, { useState, useRef, useEffect } from 'react';
import { askResearchAssistant } from '../services/geminiService';
import { EXPERIENCES, PUBLICATIONS, EDUCATION } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hello! I'm Sai's AI research assistant. Ask me about my PhD work, publications, or consultancy projects." }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [history, loading]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMsg = message.trim();
    setMessage('');
    setHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const context = `
      V Sai Sesidhar: PhD Researcher at IIT Kharagpur (Infrastructure Design and Management).
      Focus: Mixed traffic behavior, Machine Learning in Transport, Driving Risk.
      Experience: Assistant Professor at SPA Vijayawada and JNAFAU Hyderabad.
      Publications: 105th TRB Meeting, 8th CTRG, Springer Civil Infrastructures.
      Consultancy: Charlapally Station, Mobility Plan Jodhpur, TUTEM/SAFAR.
    `;

    const response = await askResearchAssistant(userMsg, context);
    setHistory(prev => [...prev, { role: 'assistant', text: response || "I'm sorry, I couldn't process that request." }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-800 w-[90vw] max-w-[400px] h-[500px] md:h-[600px] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-10 duration-500">
          <div className="p-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-inner">
                <i className="fa-solid fa-microchip animate-pulse" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Research Intelligence</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-black">AI Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-full hover:bg-white/20 transition-all flex items-center justify-center active:scale-90"
              aria-label="Close Chat"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50 dark:bg-slate-900/50">
            {history.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-up-2 duration-300`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex gap-3 items-center">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..." 
              className="flex-1 bg-slate-100 dark:bg-slate-900 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-blue-500 dark:placeholder:text-slate-500 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !message.trim()}
              className="bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 disabled:opacity-50 disabled:hover:shadow-none transition-all"
            >
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="relative group w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce"
          aria-label="Open AI Assistant"
        >
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
          <i className="fa-solid fa-brain text-2xl md:text-3xl" />
        </button>
      )}
    </div>
  );
};

export default AIChat;
