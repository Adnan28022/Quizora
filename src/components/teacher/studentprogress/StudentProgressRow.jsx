import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ChevronRight, Mail } from 'lucide-react';

const StudentProgressRow = ({ student, index }) => {
    const isImproving = student.trend === 'up';

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between p-5 bg-white border border-slate-100 rounded-3xl mb-4 hover:shadow-xl hover:shadow-indigo-50 transition-all group cursor-pointer"
        >
            {/* Student Profile */}
            <div className="flex items-center gap-4 lg:w-1/4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xs uppercase shadow-lg shadow-slate-200 group-hover:bg-indigo-600 transition-colors italic">
                    {student.initials}
                </div>
                <div>
                    <h4 className="text-sm font-black text-slate-900 tracking-tight uppercase italic">{student.name}</h4>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{student.email}</p>
                </div>
            </div>

            {/* Performance Stats */}
            <div className="flex flex-wrap items-center justify-between lg:justify-around gap-8 my-5 lg:my-0 lg:w-2/4 px-4 border-l border-slate-50">
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-1">Quizzes</p>
                    <p className="text-sm font-bold text-slate-800">{student.totalQuizzes}</p>
                </div>

                <div className="text-center min-w-[100px]">
                    <div className="flex justify-between mb-1.5">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Avg. Score</span>
                        <span className="text-[9px] font-black text-indigo-600">{student.avgScore}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${student.avgScore}%` }} />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {isImproving ? <TrendingUp size={16} className="text-emerald-500" /> : <TrendingDown size={16} className="text-red-400" />}
                    <span className={`text-xs font-bold ${isImproving ? 'text-emerald-500' : 'text-red-400'}`}>
                        {student.performance}
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 lg:w-1/4">
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                    <Mail size={18} />
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all">
                    Full Report <ChevronRight size={14} />
                </button>
            </div>
        </motion.div>
    );
};

export default StudentProgressRow;