import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, Trophy } from 'lucide-react';
import QuizCard from '../../components/ui/Challenges/QuizCard';

// Dummy Data (Teachers ka upload kiya hua)
const dummyQuizzes = [
    {
        id: 1,
        title: "Advanced React Patterns & Hooks",
        category: "Development",
        teacherName: "Prof. Sarah Miller",
        teacherAvatar: "https://i.pravatar.cc/150?u=sarah",
        duration: 30,
        totalQuestions: 25,
        rating: 4.9
    },
    {
        id: 2,
        title: "Modern Business Ethics & Strategy",
        category: "Business",
        teacherName: "Dr. James Wilson",
        teacherAvatar: "https://i.pravatar.cc/150?u=james",
        duration: 20,
        totalQuestions: 15,
        rating: 4.7
    },
    {
        id: 3,
        title: "Quantum Physics: The Basics",
        category: "Science",
        teacherName: "Elena Rodriguez",
        teacherAvatar: "https://i.pravatar.cc/150?u=elena",
        duration: 45,
        totalQuestions: 30,
        rating: 5.0
    },
    {
        id: 4,
        title: "UI/UX Design Systems 2024",
        category: "Design",
        teacherName: "Arjun Mehta",
        teacherAvatar: "https://i.pravatar.cc/150?u=arjun",
        duration: 25,
        totalQuestions: 20,
        rating: 4.8
    }
];

const Challenges = () => {
    const [activeTab, setActiveTab] = useState("All Quizzes");

    return (
        <div className="min-h-screen bg-white pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* --- HEADER --- */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-indigo-600 mb-4"
                    >
                        <Trophy size={20} />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Skill Challenges</span>
                    </motion.div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-slate-900 italic tracking-tighter"
                        >
                            Explore <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Challenges.</span>
                        </motion.h1>

                        {/* Search Bar */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by topic or teacher..."
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold"
                            />
                        </div>
                    </div>
                </div>

                {/* --- FILTERS & TABS --- */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
                    <div className="flex gap-4 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                        {["All Quizzes", "Trending", "Newest", "Most Popular"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                        <SlidersHorizontal size={18} /> Filters
                    </button>
                </div>

                {/* --- QUIZ GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyQuizzes.map((quiz, idx) => (
                        <motion.div
                            key={quiz.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <QuizCard quiz={quiz} />
                        </motion.div>
                    ))}
                </div>

                {/* --- PAGINATION --- */}
                <div className="mt-20 flex justify-center">
                    <button className="px-10 py-4 border-2 border-slate-100 rounded-2xl font-black text-slate-400 hover:border-indigo-600 hover:text-indigo-600 transition-all uppercase tracking-widest text-sm">
                        Load More Challenges
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Challenges;