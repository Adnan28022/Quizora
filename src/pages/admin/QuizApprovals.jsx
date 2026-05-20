import React from 'react';
import BreadcrumbBanner from '../../components/admin/Banner';
import ApprovalMetricsStats from '../../components/admin/quizapprovals/ApprovalMetricsStats';
import ApprovalRequestCard from '../../components/admin/quizapprovals/ApprovalRequestCard';
import { Search, Filter, SlidersHorizontal, ShieldCheck } from 'lucide-react';

const QuizApprovals = () => {
    const pendingRequests = [
        { id: "4021", title: "Advanced Quantum Logic & Computing", teacher: "Prof. Sarah Miller", category: "Science", questions: 25, time: 45, date: "10m ago" },
        { id: "4022", title: "Global Market Risk Analysis 2024", teacher: "Dr. James Wilson", category: "Business", questions: 20, time: 30, date: "45m ago" },
        { id: "4023", title: "React Design Patterns & Optimization", teacher: "Arjun Mehta", category: "Development", questions: 15, time: 20, date: "2h ago" },
        { id: "4024", title: "Neuroscience: The Synaptic Bridge", teacher: "Elena Rodriguez", category: "Medical", questions: 30, time: 50, date: "Yesterday" },
    ];

    const breadcrumbs = [{ label: "Quality Control", path: "/admin/approvals" }];

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Content Governance"
                subtitle="Review and authorize human-curated quizzes to maintain system standards."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Queue Metrics */}
            <ApprovalMetricsStats />

            {/* 2. Control Toolbar */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
                <div className="relative w-full lg:w-[450px] group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search queue by title, teacher or ID..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
                        <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Pending</button>
                        <button className="px-6 py-2.5 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Flagged</button>
                        <button className="px-6 py-2.5 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Archive</button>
                    </div>
                    <button className="p-4 bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 rounded-2xl shadow-sm transition-all">
                        <SlidersHorizontal size={20} />
                    </button>
                </div>
            </div>

            {/* 3. Approval Feed */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-8 px-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-900 rounded-xl text-white">
                            <ShieldCheck size={18} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter">Authorization <span className="text-indigo-600 underline decoration-indigo-100 decoration-4">Queue</span></h3>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse">04 Requests Waiting</p>
                </div>

                <div className="no-scrollbar">
                    {pendingRequests.map((req, i) => (
                        <ApprovalRequestCard key={i} request={req} index={i} />
                    ))}
                </div>
            </div>

            {/* Empty State / Bottom Note */}
            <div className="mt-16 text-center border-t border-slate-100 pt-10">
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em] italic">
                    End of Approval Buffer • Quizora Intelligence Protocols
                </p>
            </div>
        </div>
    );
};

export default QuizApprovals;