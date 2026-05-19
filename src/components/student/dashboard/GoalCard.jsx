import React from 'react';
import { Target, Zap } from 'lucide-react';

const GoalCard = () => {
    return (
        <div className="bg-slate-900 rounded-[2rem] p-7 text-white relative overflow-hidden h-full flex flex-col justify-between shadow-xl">
            <div className="relative z-10">
                <div className="w-10 h-10 bg-indigo-600/30 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                    <Target size={20} />
                </div>
                <h3 className="text-xl font-bold italic tracking-tight mb-3">Master Your Skills</h3>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                    Score above <span className="text-white font-bold">90%</span> in 2 more quizzes to unlock the Expert Badge.
                </p>
            </div>

            <div className="relative z-10 mt-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Progress</span>
                    <span className="text-[10px] font-bold text-white uppercase">65%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[65%] h-full bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                </div>
                <button className="w-full mt-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Zap size={14} className="text-amber-400" /> View Challenges
                </button>
            </div>

            {/* Subtle Glow */}
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-indigo-600/20 rounded-full blur-[40px]"></div>
        </div>
    );
};

export default GoalCard;