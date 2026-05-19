import React from 'react';
import { Award, ChevronRight } from 'lucide-react';

const AchievementProgress = () => {
    return (
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden mb-12 shadow-2xl shadow-indigo-100/20">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-indigo-600 rounded-xl">
                            <Award size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 italic">Next Milestone</span>
                    </div>
                    <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Elite Grandmaster</h2>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        You're just <span className="text-white font-bold underline italic decoration-indigo-500">500 points</span> away from unlocking the highest tier badge. Keep dominating the quizzes!
                    </p>
                </div>

                <div className="w-full lg:w-96">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em]">Tier Progress</span>
                        <span className="text-sm font-black italic tracking-tighter">85%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-8">
                        <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full w-[85%] shadow-[0_0_15px_rgba(79,70,229,0.6)]"></div>
                    </div>
                    <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2">
                        View Ranking Arena <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-0" />
        </div>
    );
};

export default AchievementProgress;