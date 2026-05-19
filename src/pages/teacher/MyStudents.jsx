import React from 'react';
import BreadcrumbBanner from '../../components/teacher/Banner';
import StudentRosterStats from '../../components/teacher/mystudents/StudentRosterStats';
import StudentDirectoryCard from '../../components/teacher/mystudents/StudentDirectoryCard';
import { Search, Filter, Plus } from 'lucide-react';

const MyStudents = () => {
    const studentList = [
        { name: "Alex Johnson", email: "alex@test.com", initials: "AJ", quizzesTaken: 12, isPro: true, joinDate: "Oct 2023" },
        { name: "Sarah Miller", email: "sarah@test.com", initials: "SM", quizzesTaken: 10, isPro: true, joinDate: "Sep 2023" },
        { name: "David Chen", email: "david@test.com", initials: "DC", quizzesTaken: 8, isPro: false, joinDate: "Nov 2023" },
        { name: "Emma Watson", email: "emma@test.com", initials: "EW", quizzesTaken: 15, isPro: true, joinDate: "Aug 2023" },
        { name: "James Wilson", email: "james@test.com", initials: "JW", quizzesTaken: 5, isPro: false, joinDate: "Dec 2023" },
        { name: "Elena Rodriguez", email: "elena@test.com", initials: "ER", quizzesTaken: 9, isPro: false, joinDate: "Oct 2023" },
    ];

    const breadcrumbs = [{ label: "Student Roster", path: "/teacher/students" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Student Directory"
                subtitle="View and manage all students enrolled in your expert-crafted challenges."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Statistics Row */}
            <StudentRosterStats />

            {/* 2. Directory Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 px-1">
                <div className="relative w-full lg:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search student directory..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-xs hover:bg-slate-50 transition-all">
                        <Filter size={16} /> Status
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all italic">
                        <Plus size={18} /> Add New Student
                    </button>
                </div>
            </div>

            {/* 3. Student Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studentList.map((student, i) => (
                    <StudentDirectoryCard key={i} student={student} index={i} />
                ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 text-center">
                <button className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-all italic">
                    Discover More Students
                </button>
            </div>
        </div>
    );
};

export default MyStudents;