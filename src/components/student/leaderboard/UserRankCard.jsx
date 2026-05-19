import React from 'react';
import { Target, TrendingUp } from 'lucide-react';

const UserRankCard = ({ userStats }) => {
    return (
        <div className="bg-white border border-indigo-100 rounded-[2rem] p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-50/50 relative overflow-hidden">
            <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-indigo-100">
                    #42
                </div>
                <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Your Current Standing</h4>
                    <p className="text-lg font-bold text-slate-900 leading-none tracking-tight italic uppercase">You are in the <span className="text-indigo-600">Top 10%</span> globally</p>
                </div>
            </div>

            <div className="flex gap-10 relative z-10">
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Accuracy</p>
                    <p className="text-sm font-bold text-slate-900">88.4%</p>
                </div>
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Points</p>
                    <p className="text-sm font-bold text-slate-900">1,240</p>
                </div>
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Upward Trend</p>
                    <div className="flex items-center text-emerald-500 gap-1 font-bold text-sm">
                        <TrendingUp size={14} /> +4
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute right-[-20px] top-[-20px] opacity-[0.03]">
                <Target size={150} />
            </div>
        </div>
    );
};

export default UserRankCard;