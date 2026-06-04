import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyQuizzes } from '../../redux/reducer/quiz/QuizSlice';
import BreadcrumbBanner from '../../components/teacher/Banner';
import ManageStats from '../../components/teacher/managequizzes/ManageStats';
import QuizRow from '../../components/teacher/managequizzes/QuizRow';
import { Plus, Search, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageQuizzes = () => {
    const dispatch = useDispatch();
    const quizzes = useSelector((state) => state.quiz?.quizzes ?? []);
    const isLoading = useSelector((state) => state.quiz?.isLoading ?? false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(fetchMyQuizzes());
    }, [dispatch]);

    const filteredQuizzes = quizzes.filter(quiz =>
        quiz.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quiz.category?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const breadcrumbs = [{ label: "Content Management", path: "/teacher/manage" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Quiz Central"
                subtitle="Efficiently manage, update, and track your educational content."
                breadcrumbs={breadcrumbs}
            />

            <ManageStats quizzes={quizzes} />

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by title or category..."
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl transition-all"
                    />
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <Link to="/teacher/create-quiz" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all">
                        <Plus size={18} /> New Quiz
                    </Link>
                </div>
            </div>

            <div className="mt-8">
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="animate-spin text-indigo-600" size={32} />
                    </div>
                ) : filteredQuizzes.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                        <p className="text-slate-400 font-bold italic">
                            {searchQuery ? `No results for "${searchQuery}"` : 'No quizzes found in your library.'}
                        </p>
                    </div>
                ) : (
                    filteredQuizzes.map((quiz, i) => (
                        <QuizRow key={quiz._id} quiz={quiz} index={i} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ManageQuizzes;