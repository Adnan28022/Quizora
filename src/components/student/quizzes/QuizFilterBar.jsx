import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const QuizFilterBar = () => {
    const categories = ["All Topics", "Development", "Design", "Business", "Science", "Math"];

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
            {/* Category Chips */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        className={`px-5 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all
                        ${i === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white border border-slate-200 text-slate-500 hover:border-indigo-600 hover:text-indigo-600'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search & Filter */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search quizzes..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold outline-none focus:border-indigo-600 transition-all"
                    />
                </div>
                <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-indigo-600 transition-all">
                    <SlidersHorizontal size={20} />
                </button>
            </div>
        </div>
    );
};

export default QuizFilterBar;