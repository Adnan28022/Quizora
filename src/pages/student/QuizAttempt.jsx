import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronRight, ChevronLeft, Flag, CheckCircle2, AlertTriangle } from 'lucide-react';
import toast from 'react-hot-toast';

const QuizAttempt = () => {
    const [currentQ, setCurrentQ] = useState(0);
    const [marked, setMarked] = useState([]); // Req 67: Mark for review
    const [timeLeft, setTimeLeft] = useState(1200); // Req 65: Timer management (20 mins)

    // Req 84: Anti-Cheat (Tab Switch Detection)
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                toast.error("SECURITY ALERT: Tab switching is prohibited!", {
                    icon: <AlertTriangle className="text-red-500" />,
                    style: { background: '#0f172a', color: '#fff', borderRadius: '15px' }
                });
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    const questions = [
        { id: 1, q: "What is the primary purpose of React Hooks?", opts: ["State Management", "Direct DOM Access", "Server Configuration", "Database Query"] },
        { id: 2, q: "Which protocol is used for secure data transmission?", opts: ["HTTP", "HTTPS", "FTP", "SMTP"] },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans">
            <div className="max-w-5xl mx-auto">
                {/* Header: Timer & Status */}
                <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <Clock size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Time Remaining</p>
                            <p className="text-xl font-black text-slate-900 tabular-nums">19:42</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Progress Status</p>
                        <p className="text-sm font-bold text-indigo-600 italic">Question {currentQ + 1} of {questions.length}</p>
                    </div>
                </div>

                {/* Main Question Terminal */}
                <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden min-h-[400px]">
                    <div className="relative z-10">
                        <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-6 block italic">Question #0{currentQ + 1}</span>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-10 italic">
                            {questions[currentQ].q}
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {questions[currentQ].opts.map((opt, i) => (
                                <button key={i} className="w-full text-left p-5 rounded-2xl border-2 border-slate-50 bg-slate-50/50 hover:border-indigo-600 hover:bg-white transition-all group flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600">{opt}</span>
                                    <div className="w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-indigo-600" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-indigo-50/50 rounded-full blur-[80px] -z-0" />
                </div>

                {/* Controls Footer */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-6 py-4 bg-white border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-all">
                            <ChevronLeft size={16} /> Prev
                        </button>
                        <button className="flex items-center gap-2 px-6 py-4 bg-white border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-amber-600 transition-all">
                            <Flag size={16} /> Mark for Review
                        </button>
                    </div>

                    <button className="w-full md:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all group">
                        Confirm & Next <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizAttempt;