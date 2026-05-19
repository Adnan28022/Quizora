import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

const ResultRow = ({ result, index }) => {
    const isPassed = result.score >= 70;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-white border border-slate-100 rounded-3xl hover:bg-slate-50 transition-all group mb-4"
        >
            {/* Quiz Info */}
            <div className="flex items-center gap-5 md:w-1/3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${isPassed ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'}`}>
                    {isPassed ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors uppercase italic">{result.title}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{result.date}</p>
                </div>
            </div>

            {/* Score Visual */}
            <div className="flex items-center gap-6 my-4 md:my-0 md:w-1/3 justify-center">
                <div className="w-full max-w-[120px]">
                    <div className="flex justify-between mb-1.5">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Score</span>
                        <span className={`text-[10px] font-black ${isPassed ? 'text-emerald-600' : 'text-red-600'}`}>{result.score}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${result.score}%` }}
                            className={`h-full rounded-full ${isPassed ? 'bg-emerald-500' : 'bg-red-500'}`}
                        />
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Rank</p>
                    <p className="text-sm font-black text-slate-900">#{result.rank}</p>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 md:w-1/3">
                {isPassed && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                        <FileDown size={14} /> Certificate
                    </button>
                )}
                <button className="p-2 bg-slate-100 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                    <ChevronRight size={18} />
                </button>
            </div>
        </motion.div>
    );
};

export default ResultRow;