import React from 'react';
import BreadcrumbBanner from '../../components/admin/Banner';
import TeacherManagementStats from '../../components/admin/manageTeachers/TeacherManagementStats';
import TeacherManagementRow from '../../components/admin/manageTeachers/TeacherManagementRow';
import { Search, Filter, Plus, SlidersHorizontal } from 'lucide-react';

const ManageTeachers = () => {
    const teachersList = [
        { name: "Prof. Sarah Miller", email: "sarah@quizora.faculty", initials: "SM", subject: "Web Development", quizzes: 24, rating: 4.9, status: "Verified" },
        { name: "Dr. James Wilson", email: "james@quizora.faculty", initials: "JW", subject: "Quantum Physics", quizzes: 15, rating: 4.7, status: "Verified" },
        { name: "Arjun Mehta", email: "arjun@quizora.faculty", initials: "AM", subject: "UI/UX Design", quizzes: 10, rating: 4.8, status: "Verified" },
        { name: "Elena Rodriguez", email: "elena@quizora.faculty", initials: "ER", subject: "Data Science", quizzes: 8, rating: 4.6, status: "Pending" },
        { name: "Cody Fisher", email: "cody@quizora.faculty", initials: "CF", subject: "Cyber Security", quizzes: 5, rating: 4.2, status: "Verified" },
    ];

    const breadcrumbs = [{ label: "Faculty Governance", path: "/admin/teachers" }];

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Educator Registry"
                subtitle="High-level oversight of the faculty panel, content accreditation, and educator performance."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Global Metrics */}
            <TeacherManagementStats />

            {/* 2. Advanced Control Terminal */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
                <div className="relative w-full lg:w-[450px] group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search educator by name, email or faculty ID..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-[1.5rem] text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl focus:shadow-indigo-100/50 transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
                        <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg italic">All Faculty</button>
                        <button className="px-6 py-2.5 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all italic">Verified Only</button>
                    </div>
                    <button className="p-4 bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 rounded-2xl shadow-sm transition-all">
                        <Plus size={20} />
                    </button>
                </div>
            </div>

            {/* 3. The Faculty Feed */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-8 px-4">
                    <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter">Faculty <span className="text-indigo-600 underline decoration-indigo-100 decoration-4">Registry</span></h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">Total: 450 Educators</p>
                </div>

                <div className="no-scrollbar">
                    {teachersList.map((teacher, i) => (
                        <TeacherManagementRow key={i} teacher={teacher} index={i} />
                    ))}
                </div>
            </div>

            {/* Pagination / Load Buffer */}
            <div className="mt-16 text-center border-t border-slate-100 pt-10">
                <button className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-all italic underline underline-offset-8">
                    Sync More Records
                </button>
            </div>
        </div>
    );
};

export default ManageTeachers;