import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadcrumbBanner from '../../components/student/Banner';
import QuizFilterBar from '../../components/student/quizzes/QuizFilterBar';
import AvailableQuizCard from '../../components/student/quizzes/AvailableQuizCard';
import { fetchAvailableQuizzes } from '../../redux/reducer/quiz/QuizSlice';
import { fetchCategories } from '../../redux/reducer/category/CategorySlice';
import { Loader2, Layout } from 'lucide-react';

const AvailableQuizzes = () => {
    const dispatch = useDispatch();
    const { quizzes, isLoading } = useSelector((state) => state.quiz);

    // State for filtering
    const [selectedCategory, setSelectedCategory] = useState("All Topics");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Categories fetch karein taake filter bar dynamic ho jaye
        dispatch(fetchCategories());
        // Quizzes fetch karein
        dispatch(fetchAvailableQuizzes());
    }, [dispatch]);

    // --- Filter Logic ---
    const filteredQuizzes = quizzes.filter(quiz => {
        const matchesCategory = selectedCategory === "All Topics" || quiz.category?.name === selectedCategory;
        const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const breadcrumbs = [{ label: "Quizzes", path: "/student/quizzes" }];

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Available Quizzes"
                subtitle="Explore expert-curated challenges and test your knowledge."
                breadcrumbs={breadcrumbs}
            />

            {/* Filter bar with props for control */}
            <QuizFilterBar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* Quiz Grid */}
            <div className="no-scrollbar min-h-[400px]">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Syncing Challenges...</p>
                    </div>
                ) : filteredQuizzes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredQuizzes.map((quiz) => (
                            <AvailableQuizCard key={quiz._id} quiz={quiz} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                        <Layout className="mx-auto text-slate-200 mb-4" size={50} />
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No quizzes found for this selection.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AvailableQuizzes;