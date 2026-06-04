import React from 'react';
import { useSelector } from 'react-redux';
import { Search, SlidersHorizontal, Tag } from 'lucide-react';

const QuizFilterBar = ({ selectedCategory, setSelectedCategory, searchTerm, setSearchTerm }) => {
    const { categories } = useSelector((state) => state.category);

    // Combine "All Topics" with database categories
    const allCategories = ["All Topics", ...categories.map(c => c.name)];

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
            {/* Category Chips */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2">
                {allCategories.map((cat, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border
                        ${selectedCategory === cat
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100'
                                : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-600 hover:text-indigo-600'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-72 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={16} />
                    <input
                        type="text"
                        placeholder="Search quizzes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl focus:shadow-indigo-50 transition-all shadow-sm"
                    />
                </div>
                <button className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm">
                    <SlidersHorizontal size={20} />
                </button>
            </div>
        </div>
    );
};

export default QuizFilterBar;