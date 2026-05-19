import React from 'react';
import { motion } from 'framer-motion';

const RankRow = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl mb-3 hover:bg-slate-50 transition-all group"
        >
            <div className="flex items-center gap-6">
                <span className="w-8 text-sm font-black text-slate-300 group-hover:text-indigo-600 italic">#{data.rank}</span>
                <div className="flex items-center gap-4">
                    <img src={data.avatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="" />
                    <div>
                        <h4 className="text-sm font-bold text-slate-800 tracking-tight">{data.name}</h4>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{data.level}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-12">
                <div className="text-right hidden sm:block">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Accuracy</p>
                    <p className="text-xs font-bold text-slate-700">{data.accuracy}%</p>
                </div>
                <div className="text-right min-w-[80px]">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Score</p>
                    <p className="text-sm font-black text-indigo-600 italic tracking-tighter">{data.points.toLocaleString()}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default RankRow;