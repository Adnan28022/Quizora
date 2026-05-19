import React from 'react';
import BreadcrumbBanner from '../../components/student/Banner';
import QuizFilterBar from '../../components/student/quizzes/QuizFilterBar';
import AvailableQuizCard from '../../components/student/quizzes/AvailableQuizCard';

const AvailableQuizzes = () => {
    // Teacher dwara upload kiye gaye sample quizzes
    const quizzes = [
        { id: 1, title: "Modern React Architecture", category: "Development", teacher: "Prof. Sarah Miller", rating: 4.9, duration: 30, totalQs: 20 },
        { id: 2, title: "Financial Risk Management", category: "Business", teacher: "Dr. James Wilson", rating: 4.7, duration: 25, totalQs: 15 },
        { id: 3, title: "UI Design Systems 101", category: "Design", teacher: "Elena Rodriguez", rating: 4.8, duration: 20, totalQs: 10 },
        { id: 4, title: "Advanced Quantum Logic", category: "Science", teacher: "Arjun Mehta", rating: 5.0, duration: 45, totalQs: 30 },
        { id: 5, title: "E-Commerce Strategy", category: "Business", teacher: "Prof. Sarah Miller", rating: 4.6, duration: 20, totalQs: 15 },
        { id: 6, title: "CSS Grid & Animations", category: "Development", teacher: "Arjun Mehta", rating: 4.9, duration: 15, totalQs: 10 },
    ];

    const breadcrumbs = [
        { label: "Quizzes", path: "/student/quizzes" }
    ];

    return (
        <div className="pb-10">
            {/* 1. Reusable Banner */}
            <BreadcrumbBanner
                title="Available Quizzes"
                subtitle="Explore expert-curated challenges and test your knowledge."
                breadcrumbs={breadcrumbs}
            />

            {/* 2. Filters */}
            <QuizFilterBar />

            {/* 3. Quiz Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {quizzes.map((quiz) => (
                    <AvailableQuizCard key={quiz.id} quiz={quiz} />
                ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
                <button className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">
                    Load More Quizzes
                </button>
            </div>
        </div>
    );
};

export default AvailableQuizzes;