import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Check, X, Eye, User, Calendar } from 'lucide-react';
import { updateQuizStatus } from '../../../redux/reducer/quiz/QuizSlice';
import moment from 'moment';

const ApprovalRequestCard = ({ request, index }) => {
    const dispatch = useDispatch();

    const handleStatusUpdate = (newStatus) => {
        if (window.confirm(`Are you sure you want to ${newStatus} this quiz?`)) {
            dispatch(updateQuizStatus({ quizId: request._id, status: newStatus }));
        }
    };

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
                        <span className="text-xs font-black italic">#{request._id.slice(-4)}</span>
                    </div>
                    <div>
                        <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tighter group-hover:text-indigo-600 transition-colors leading-tight mb-2">
                            {request.title}
                        </h4>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <User size={12} className="text-indigo-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{request.teacher?.name}</span>
                            </div>
                            <span className="text-slate-200">|</span>
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <Calendar size={12} className="text-indigo-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    {moment(request.createdAt).fromNow()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meta Details */}
                <div className="flex items-center justify-around flex-1 px-6 border-l border-slate-50">
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Category</p>
                        <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-tighter border border-slate-100 italic">
                            {request.category?.name || 'General'}
                        </span>
                    </div>
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Questions</p>
                        <p className="text-sm font-bold text-slate-700">{request.questions?.length || 0} Qs</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Duration</p>
                        <p className="text-sm font-bold text-slate-700">{request.duration}m</p>
                    </div>
                </div>

                {/* Action Terminal */}
                <div className="flex items-center justify-end gap-3 lg:w-1/4">
                    {request.status === 'pending' ? (
                        <>
                            <button
                                onClick={() => handleStatusUpdate('rejected')}
                                className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-sm"
                            >
                                <X size={16} /> Reject
                            </button>
                            <button
                                onClick={() => handleStatusUpdate('approved')}
                                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100"
                            >
                                <Check size={16} /> Authorize
                            </button>
                        </>
                    ) : (
                        <div className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border ${request.status === 'approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                            {request.status}
                        </div>
                    )}
                </div>

            </div>
        </motion.div>
    );
};

export default ApprovalRequestCard;