import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Trash2, BarChart2, MoreVertical, Users, HelpCircle } from 'lucide-react';

const QuizRow = ({ quiz, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between p-6 bg-white border border-slate-100 rounded-[2rem] mb-4 hover:shadow-xl hover:shadow-indigo-50 transition-all group"
        >
            {/* Quiz Info */}
            <div className="flex items-center gap-5 lg:w-1/3">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner font-black italic text-lg
                    ${quiz.status === 'Live' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
                    {index + 1}
                </div>
                <div>
                    <h4 className="text-sm font-black text-slate-900 tracking-tight uppercase italic group-hover:text-indigo-600 transition-colors">
                        {quiz.title}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                        Category: {quiz.category} • Created: {quiz.date}
                    </p>
                </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="flex flex-wrap items-center gap-8 my-6 lg:my-0 lg:w-1/3 lg:justify-center">
                <div className="text-center">
                    <div className="flex items-center gap-1.5 text-slate-700 justify-center">
                        <Users size={14} className="text-indigo-500" />
                        <span className="text-sm font-bold">{quiz.attempts}</span>
                    </div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Students</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center gap-1.5 text-slate-700 justify-center">
                        <HelpCircle size={14} className="text-indigo-500" />
                        <span className="text-sm font-bold">{quiz.questions}</span>
                    </div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Questions</p>
                </div>
                <div className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border
                    ${quiz.status === 'Live' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}">
                    {quiz.status}
                </div>
            </div>

            {/* Action Terminal */}
            <div className="flex items-center justify-end gap-3 lg:w-1/3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                    <Edit3 size={14} /> Edit
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg">
                    <BarChart2 size={14} /> Analytics
                </button>
                <button className="p-2.5 text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                </button>
            </div>
        </motion.div>
    );
};

export default QuizRow;