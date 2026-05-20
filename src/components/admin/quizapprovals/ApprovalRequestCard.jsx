import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Eye, User, Calendar, BookOpen } from 'lucide-react';

const ApprovalRequestCard = ({ request, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/40 transition-all group relative mb-4"
        >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                {/* Quiz & Teacher Info */}
                <div className="flex gap-5 lg:w-2/5">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex flex-col items-center justify-center text-indigo-600 shrink-0 border border-indigo-100 shadow-inner">
                        <span className="text-[10px] font-black uppercase leading-none mb-1">ID</span>
                        <span className="text-sm font-black italic">#{request.id}</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tighter group-hover:text-indigo-600 transition-colors leading-tight mb-2">
                            {request.title}
                        </h4>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <User size={12} className="text-indigo-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{request.teacher}</span>
                            </div>
                            <span className="text-slate-200">|</span>
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <Calendar size={12} className="text-indigo-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{request.date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meta Details */}
                <div className="flex items-center justify-around flex-1 px-6 border-l border-slate-50">
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Category</p>
                        <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-tighter border border-slate-100 italic">
                            {request.category}
                        </span>
                    </div>
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Questions</p>
                        <p className="text-sm font-bold text-slate-700">{request.questions} Qs</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Duration</p>
                        <p className="text-sm font-bold text-slate-700">{request.time}m</p>
                    </div>
                </div>

                {/* Action Terminal */}
                <div className="flex items-center justify-end gap-3 lg:w-1/4">
                    <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-sm group/btn" title="View Full Content">
                        <Eye size={18} />
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-sm" title="Reject Quiz">
                        <X size={16} /> Reject
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100" title="Approve Quiz">
                        <Check size={16} /> Authorize
                    </button>
                </div>

            </div>
        </motion.div>
    );
};

export default ApprovalRequestCard;