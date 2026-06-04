import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadcrumbBanner from '../../components/admin/Banner';
import TeacherManagementStats from '../../components/admin/manageTeachers/TeacherManagementStats';
import TeacherManagementRow from '../../components/admin/manageTeachers/TeacherManagementRow';
import { Search, Plus, Loader2, RefreshCcw } from 'lucide-react';
import { fetchAllUsers } from '../../redux/reducer/auth/AuthSlice';
import { fetchAllQuizzesAdmin } from '../../redux/reducer/quiz/QuizSlice';

const ManageTeachers = () => {
    const dispatch = useDispatch();
    const { allUsers, isLoading: userLoading } = useSelector((state) => state.auth);
    const { allQuizzes, isLoading: quizLoading } = useSelector((state) => state.quiz);

    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("all"); // 'all' or 'verified'

    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllQuizzesAdmin());
    }, [dispatch]);

    // --- Data Mapping & Filtering ---
    const teachers = allUsers.filter(user => user.role === 'teacher');

    const filteredTeachers = teachers.filter(t => {
        const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "all" || t.isApproved;
        return matchesSearch && matchesFilter;
    });

    const breadcrumbs = [{ label: "Faculty Governance", path: "/admin/teachers" }];

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Educator Registry"
                subtitle="High-level oversight of the faculty panel, content accreditation, and educator performance."
                breadcrumbs={breadcrumbs}
            />

            <TeacherManagementStats teachers={teachers} allQuizzes={allQuizzes} />

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
                <div className="relative w-full lg:w-[450px] group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search educator by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-[1.5rem] text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all italic ${filter === 'all' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            All Faculty
                        </button>
                        <button
                            onClick={() => setFilter("verified")}
                            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all italic ${filter === 'verified' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            Verified Only
                        </button>
                    </div>
                    <button
                        onClick={() => dispatch(fetchAllUsers())}
                        className="p-4 bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 rounded-2xl shadow-sm transition-all"
                    >
                        <RefreshCcw size={20} className={userLoading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex justify-between items-center mb-8 px-4">
                    <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter">
                        Faculty <span className="text-indigo-600 underline decoration-indigo-100 decoration-4">Registry</span>
                    </h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">
                        Total: {filteredTeachers.length} Educators
                    </p>
                </div>

                <div className="no-scrollbar min-h-[300px]">
                    {userLoading || quizLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="animate-spin text-indigo-600 mb-2" size={32} />
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Syncing Registry...</p>
                        </div>
                    ) : filteredTeachers.length > 0 ? (
                        filteredTeachers.map((teacher, i) => (
                            <TeacherManagementRow
                                key={teacher._id}
                                teacher={teacher}
                                index={i}
                                // Count quizzes for this specific teacher
                                quizCount={allQuizzes.filter(q => q.teacher?._id === teacher._id).length}
                            />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                            <p className="text-slate-500 font-bold italic uppercase text-xs">No educators found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageTeachers;