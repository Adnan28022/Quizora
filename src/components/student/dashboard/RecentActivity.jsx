import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Redirection ke liye
import { ArrowUpRight, GraduationCap, Loader2 } from 'lucide-react';
import { fetchAvailableQuizzes } from '../../../redux/reducer/quiz/QuizSlice';

const RecentActivity = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Hook initialize karein

    const { quizzes, isLoading } = useSelector((state) => state.quiz);

    useEffect(() => {
        dispatch(fetchAvailableQuizzes());
    }, [dispatch]);

    // Top 3 recently added approved quizzes as "New Challenges"
    const newChallenges = quizzes.slice(0, 3);

    // Quiz attempt handle karne ka function
    const handleStartQuiz = (quizId) => {
        // Hum student ko quiz start karne ke page par bhejenge
        // Aapko ye route banana hoga: e.g., /quiz/attempt/:id
        navigate(`/student/quiz/attempt/${quizId}`);
    };

    return (
        <div className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">New <span className="text-indigo-600 italic">Challenges</span></h3>
                <button
                    onClick={() => navigate('/student/quizzes')} // Saare quizzes dekhne ke liye
                    className="text-[10px] font-bold uppercase text-indigo-600 tracking-widest hover:underline"
                >
                    Explore
                </button>
            </div>

            <div className="space-y-3">
                {isLoading ? (
                    <div className="flex justify-center py-5">
                        <Loader2 className="animate-spin text-indigo-600" size={24} />
                    </div>
                ) : newChallenges.length > 0 ? (
                    newChallenges.map((quiz) => (
                        <div
                            key={quiz._id}
                            onClick={() => handleStartQuiz(quiz._id)} // Click par function call
                            className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-lg hover:shadow-indigo-50 transition-all group cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <GraduationCap size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                                        {quiz.title}
                                    </h4>
                                    <p className="text-[10px] font-medium text-slate-400 uppercase mt-1">
                                        {quiz.category?.name || 'General'} • {quiz.questions?.length || 0} Questions
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xs text-slate-400 text-center py-10 italic border-2 border-dashed border-slate-50 rounded-2xl">
                        No new challenges available right now.
                    </p>
                )}
            </div>
        </div>
    );
};

export default RecentActivity;