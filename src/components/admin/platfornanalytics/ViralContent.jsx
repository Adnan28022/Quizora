import React from 'react';
import { ArrowUpRight, Play, Users, Clock } from 'lucide-react';

const ViralContent = () => {
    const viral = [
        { title: "React Design Patterns 2024", teacher: "Sarah Miller", attempts: "4.2k", growth: "+45%" },
        { title: "Quantum Physics Essentials", teacher: "Arjun Mehta", attempts: "2.8k", growth: "+12%" },
        { title: "UI Design Case Studies", teacher: "Elena Rodriguez", attempts: "1.9k", growth: "+24%" },
    ];

    return (
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden h-full shadow-2xl">
            <div className="relative z-10">
                <h3 className="text-lg font-black italic uppercase tracking-tighter mb-8">Viral <span className="text-indigo-400">Inventory</span></h3>

                <div className="space-y-4">
                    {viral.map((quiz, i) => (
                        <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group cursor-pointer">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-sm font-bold tracking-tight italic">{quiz.title}</h4>
                                    <p className="text-[10px] font-medium text-slate-400 uppercase mt-1 tracking-widest">Educator: {quiz.teacher}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg">{quiz.growth}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                <div className="flex items-center gap-4 text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Users size={12} className="text-indigo-400" />
                                        <span className="text-[10px] font-bold text-slate-300">{quiz.attempts}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Play size={12} className="text-indigo-400" />
                                        <span className="text-[10px] font-bold text-slate-300">Attempted</span>
                                    </div>
                                </div>
                                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Background Decor */}
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-indigo-600/10 rounded-full blur-[40px]"></div>
        </div>
    );
};

export default ViralContent;