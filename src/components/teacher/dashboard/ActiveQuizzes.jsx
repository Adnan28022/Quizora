import React from 'react';
import { MoreVertical, Users, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ActiveQuizzes = () => {
    const { quizzes, isLoading } = useSelector((state) => state.quiz);

    if (isLoading) {
        return <div className="bg-white rounded-[2rem] p-20 flex justify-center border border-slate-100"><Loader2 className="animate-spin text-indigo-600" /></div>;
    }

    return (
        <div className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight uppercase italic">My <span className="text-indigo-600">Quizzes</span></h3>
                <Link to="/teacher/manage-quizzes" className="text-[10px] font-bold uppercase text-indigo-600 tracking-widest hover:underline">View All</Link>
            </div>

            <div className="space-y-4">
                {quizzes.length === 0 ? (
                    <div className="text-center py-10">
                        <AlertCircle className="mx-auto text-slate-300 mb-2" size={30} />
                        <p className="text-xs font-bold text-slate-400 uppercase">No Quizzes Created Yet</p>
                    </div>
                ) : (
                    quizzes.slice(0, 5).map((quiz, i) => ( // Only top 5 on dashboard
                        <div key={quiz._id} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all group">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center ${quiz.status === 'approved' ? 'text-emerald-500' : 'text-amber-500'}`}>
                                    <CheckCircle2 size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 tracking-tight">{quiz.title}</h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-wider">
                                        {quiz.questions?.length || 0} Qs •
                                        <span className={`ml-1 ${quiz.status === 'approved' ? 'text-emerald-500' : 'text-amber-500'}`}>
                                            {quiz.status.toUpperCase()}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right hidden sm:block">
                                    <div className="flex items-center gap-1 text-slate-600 justify-end">
                                        <Users size={12} />
                                        <span className="text-xs font-bold">{quiz.attempts || 0}</span>
                                    </div>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Attempts</p>
                                </div>
                                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ActiveQuizzes;