import React from 'react';
import { MoreVertical, Users, CheckCircle2 } from 'lucide-react';

const ActiveQuizzes = () => {
    const quizzes = [
        { title: "Advanced React Patterns", students: 450, status: "Live", questions: 20 },
        { title: "Node.js Architecture", students: 320, status: "Live", questions: 15 },
        { title: "UI Design Systems", students: 180, status: "Draft", questions: 10 },
    ];

    return (
        <div className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight uppercase italic">My <span className="text-indigo-600">Quizzes</span></h3>
                <button className="text-[10px] font-bold uppercase text-indigo-600 tracking-widest hover:underline">View All</button>
            </div>

            <div className="space-y-4">
                {quizzes.map((quiz, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-indigo-600">
                                <CheckCircle2 size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800 tracking-tight">{quiz.title}</h4>
                                <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-wider">
                                    {quiz.questions} Qs • <span className={quiz.status === 'Live' ? 'text-emerald-500' : 'text-amber-500'}>{quiz.status}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right hidden sm:block">
                                <div className="flex items-center gap-1 text-slate-600 justify-end">
                                    <Users size={12} />
                                    <span className="text-xs font-bold">{quiz.students}</span>
                                </div>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Attempts</p>
                            </div>
                            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveQuizzes;