import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadcrumbBanner from '../../components/admin/Banner';
import { Terminal, Loader2, RefreshCcw, UserPlus, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchAllUsers } from '../../redux/reducer/auth/AuthSlice';
import { fetchAllQuizzesAdmin } from '../../redux/reducer/quiz/QuizSlice';
import moment from 'moment';

const SystemLogs = () => {
    const dispatch = useDispatch();

    // Redux store se data nikalna
    const { allUsers, isLoading: userLoading } = useSelector((state) => state.auth);
    const { allQuizzes, isLoading: quizLoading } = useSelector((state) => state.quiz);

    // --- PAGINATION STATE ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Ek page par kitne logs dikhane hain

    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllQuizzesAdmin());
    }, [dispatch]);

    // --- DATA AGGREGATION ---
    const generateLogs = () => {
        const userLogs = allUsers.map(user => ({
            id: `REG-${user._id.slice(-4).toUpperCase()}`,
            user: user.name,
            action: user.role === 'teacher' ? "Teacher Registry" : "Student Registry",
            target: user.email,
            status: user.isVerified ? "Verified" : "Pending",
            time: user.createdAt,
            icon: <UserPlus size={14} className="text-blue-500" />
        }));

        const quizLogs = allQuizzes.map(quiz => ({
            id: `QUZ-${quiz._id.slice(-4).toUpperCase()}`,
            user: quiz.teacher?.name || "Unknown",
            action: "Quiz Protocol",
            target: quiz.title,
            status: quiz.status === 'approved' ? "Success" : "Review",
            time: quiz.createdAt,
            icon: <FileText size={14} className="text-indigo-500" />
        }));

        return [...userLogs, ...quizLogs].sort((a, b) => new Date(b.time) - new Date(a.time));
    };

    const auditTrail = generateLogs();

    // --- PAGINATION LOGIC ---
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentLogs = auditTrail.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(auditTrail.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Page ke top par scroll karne ke liye (optional)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isLoading = userLoading || quizLoading;

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Audit Terminal"
                subtitle="Detailed log records of all system activities and administrative actions."
                breadcrumbs={[{ label: "Audit Logs", path: "/admin/logs" }]}
            />

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-100">
                            <Terminal size={20} />
                        </div>
                        <h3 className="text-xl font-black italic uppercase tracking-tighter">
                            Master <span className="text-indigo-600">Audit Trail</span>
                        </h3>
                    </div>
                    <button
                        onClick={() => { dispatch(fetchAllUsers()); dispatch(fetchAllQuizzesAdmin()); setCurrentPage(1); }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                    >
                        <RefreshCcw size={14} className={isLoading ? "animate-spin" : ""} /> Sync Logs
                    </button>
                </div>

                <div className="overflow-x-auto no-scrollbar">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-24">
                            <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Accessing Bitstream...</p>
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50/50">
                                <tr>
                                    <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Ref ID</th>
                                    <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Operator</th>
                                    <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Action Protocol</th>
                                    <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Status</th>
                                    <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {currentLogs.length > 0 ? currentLogs.map((log, i) => (
                                    <tr key={i} className="hover:bg-indigo-50/30 transition-colors group">
                                        <td className="p-6">
                                            <span className="text-[11px] font-black font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                                                {log.id}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <span className="text-xs font-bold text-slate-700 uppercase italic">{log.user}</span>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-indigo-600 transition-colors">
                                                    {log.icon}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-black text-slate-900 uppercase leading-none mb-1">{log.action}</span>
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase truncate max-w-[150px]">{log.target}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-full border 
                                                ${log.status === 'Success' || log.status === 'Verified'
                                                    ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                                    : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                                {log.status}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-slate-400 italic leading-none">{moment(log.time).format('HH:mm:ss')}</span>
                                                <span className="text-[8px] font-bold text-slate-300 uppercase mt-1">{moment(log.time).format('DD/MM/YY')}</span>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr><td colSpan="5" className="p-20 text-center text-slate-400 italic">No logs found.</td></tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* --- PAGINATION CONTROLS --- */}
                {!isLoading && auditTrail.length > itemsPerPage && (
                    <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
                            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, auditTrail.length)} of {auditTrail.length} Records
                        </p>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-1">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all ${currentPage === index + 1
                                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                                                : 'bg-white text-slate-400 border border-slate-100 hover:border-indigo-200'
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 flex justify-between items-center px-6">
                <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.4em]">Audit Trail Buffer v2.0</p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Active Data Feed</span>
                </div>
            </div>
        </div>
    );
};

export default SystemLogs;