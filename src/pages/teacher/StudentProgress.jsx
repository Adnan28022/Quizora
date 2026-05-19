import React from 'react';
import BreadcrumbBanner from '../../components/teacher/Banner';
import ClassAnalyticsStats from '../../components/teacher/studentprogress/ClassAnalyticsStats';
import StudentProgressRow from '../../components/teacher/studentprogress/StudentProgressRow';
import { Search, SlidersHorizontal, Download } from 'lucide-react';

const StudentProgress = () => {
    const students = [
        { name: "Alex Johnson", email: "alex@test.com", initials: "AJ", totalQuizzes: 12, avgScore: 92, performance: "+12%", trend: "up" },
        { name: "Sarah Miller", email: "sarah@test.com", initials: "SM", totalQuizzes: 10, avgScore: 85, performance: "+5%", trend: "up" },
        { name: "David Chen", email: "david@test.com", initials: "DC", totalQuizzes: 8, avgScore: 64, performance: "-3%", trend: "down" },
        { name: "Emma Watson", email: "emma@test.com", initials: "EW", totalQuizzes: 15, avgScore: 95, performance: "+8%", trend: "up" },
        { name: "James Wilson", email: "james@test.com", initials: "JW", totalQuizzes: 5, avgScore: 42, performance: "-15%", trend: "down" },
    ];

    const breadcrumbs = [{ label: "Student Analytics", path: "/teacher/analytics" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Performance Terminal"
                subtitle="Analyze class-wide progress and identify individual student needs."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Global Metrics */}
            <ClassAnalyticsStats />

            {/* 2. Advanced Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
                <div className="relative w-full lg:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1-2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search student or ID..."
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-xs hover:bg-slate-50 transition-all">
                        <SlidersHorizontal size={16} /> Filters
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-indigo-600 transition-all italic">
                        <Download size={18} /> Export Data
                    </button>
                </div>
            </div>

            {/* 3. Students Performance List */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-6 px-4">
                    <h3 className="text-lg font-black text-slate-900 italic uppercase tracking-tighter">Student <span className="text-indigo-600 underline decoration-indigo-200 decoration-4">Roster</span></h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total: 1,248 Students</p>
                </div>

                <div className="no-scrollbar overflow-y-auto max-h-[800px]">
                    {students.map((student, i) => (
                        <StudentProgressRow key={i} student={student} index={i} />
                    ))}
                </div>
            </div>

            {/* Pagination / View More */}
            <div className="mt-12 text-center">
                <button className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-all italic">
                    Load More Student Records
                </button>
            </div>
        </div>
    );
};

export default StudentProgress;