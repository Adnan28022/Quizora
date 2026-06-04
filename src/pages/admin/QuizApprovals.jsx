import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadcrumbBanner from '../../components/admin/Banner';
import ApprovalMetricsStats from '../../components/admin/quizapprovals/ApprovalMetricsStats';
import ApprovalRequestCard from '../../components/admin/quizapprovals/ApprovalRequestCard';
import { Search, SlidersHorizontal, ShieldCheck, Loader2, Database, RefreshCcw } from 'lucide-react';
import { fetchAllQuizzesAdmin, quizReset } from '../../redux/reducer/quiz/QuizSlice';
import toast from 'react-hot-toast';

const QuizApprovals = () => {
    const dispatch = useDispatch();

    // Redux store se data nikalna
    const { allQuizzes, isLoading, isSuccess, message, isError } = useSelector((state) => state.quiz);

    // Local States
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("pending"); // Default: Pending tab

    // 1. Initial Data Fetch
    useEffect(() => {
        dispatch(fetchAllQuizzesAdmin());
    }, [dispatch]);

    // 2. Success/Error Toast Notifications & List Refresh
    useEffect(() => {
        if (isSuccess && message) {
            toast.success(message);
            dispatch(quizReset());
            dispatch(fetchAllQuizzesAdmin()); // List refresh after status update
        }
        if (isError && message) {
            toast.error(message);
            dispatch(quizReset());
        }
    }, [isSuccess, isError, message, dispatch]);

    // 3. Filter & Search Logic
    const filteredQuizzes = Array.isArray(allQuizzes) ? allQuizzes.filter((quiz) => {
        const matchesStatus = quiz.status === statusFilter;
        const matchesSearch =
            quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (quiz.teacher?.name && quiz.teacher.name.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesStatus && matchesSearch;
    }) : [];

    const breadcrumbs = [{ label: "Quality Control", path: "/admin/approvals" }];

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Content Governance"
                subtitle="Review and authorize human-curated quizzes to maintain system standards."
                breadcrumbs={breadcrumbs}
            />

            {/* Metrics Section - Passing all quizzes for counts */}
            <ApprovalMetricsStats quizzes={allQuizzes || []} />

            {/* Control Toolbar */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
                {/* Search Bar */}
                <div className="relative w-full lg:w-[450px] group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search by quiz title or teacher name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl transition-all shadow-sm"
                    />
                </div>

                {/* Status Tabs */}
                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        {['pending', 'approved', 'rejected'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${statusFilter === status
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                                    : 'text-slate-400 hover:text-indigo-600'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                    {/* Manual Refresh Button */}
                    <button
                        onClick={() => dispatch(fetchAllQuizzesAdmin())}
                        className="p-4 bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 rounded-2xl shadow-sm transition-all"
                    >
                        <RefreshCcw size={20} className={isLoading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            {/* Quiz List Container */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-8 px-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-900 rounded-xl text-white">
                            <ShieldCheck size={18} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter">
                            Authorization <span className="text-indigo-600">Queue</span>
                        </h3>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                        {filteredQuizzes.length} {statusFilter} Requests
                    </p>
                </div>

                <div className="no-scrollbar min-h-[300px]">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Accessing Database...</p>
                        </div>
                    ) : filteredQuizzes.length > 0 ? (
                        filteredQuizzes.map((quiz, i) => (
                            <ApprovalRequestCard key={quiz._id} request={quiz} index={i} />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                            <Database className="mx-auto text-slate-200 mb-4" size={50} />
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                                No {statusFilter} quizzes found in this queue.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Note */}
            <div className="mt-16 text-center border-t border-slate-100 pt-10">
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em] italic">
                    Quizora Intelligence Content Registry • Secure Protocol
                </p>
            </div>
        </div>
    );
};

export default QuizApprovals;