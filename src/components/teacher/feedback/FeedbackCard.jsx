import React from 'react';
import { motion } from 'framer-motion';
import { Star, Reply, MoreHorizontal, CheckCircle2 } from 'lucide-react';

const FeedbackCard = ({ feedback, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all group relative"
        >
            <div className="flex flex-col md:flex-row justify-between gap-6">

                {/* User & Message */}
                <div className="flex gap-4 flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xs font-black italic shrink-0 shadow-lg shadow-slate-200 group-hover:bg-indigo-600 transition-colors uppercase">
                        {feedback.initials}
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-sm font-black text-slate-900 uppercase italic tracking-tight">{feedback.studentName}</h4>
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">• {feedback.date}</span>
                        </div>
                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-3 italic">Quiz: {feedback.quizTitle}</p>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed italic">
                            "{feedback.message}"
                        </p>
                    </div>
                </div>

                {/* Rating & Action */}
                <div className="flex md:flex-col justify-between items-end gap-4 min-w-[120px]">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                className={i < feedback.rating ? "text-amber-400 fill-amber-400" : "text-slate-100"}
                            />
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {feedback.responded ? (
                            <div className="flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest">
                                <CheckCircle2 size={14} /> Solved
                            </div>
                        ) : (
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">
                                <Reply size={14} /> Reply
                            </button>
                        )}
                        <button className="p-2.5 text-slate-300 hover:text-slate-600 bg-slate-50 rounded-xl">
                            <MoreHorizontal size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default FeedbackCard;