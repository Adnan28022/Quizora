import React from 'react';
import BreadcrumbBanner from '../../components/teacher/Banner';
import FeedbackStats from '../../components/teacher/feedback/FeedbackStats';
import FeedbackCard from '../../components/teacher/feedback/FeedbackCard';
import { Search, Filter, MessageSquare } from 'lucide-react';

const TeacherFeedback = () => {
    const feedbackList = [
        {
            studentName: "Alex Johnson",
            initials: "AJ",
            quizTitle: "Advanced React Design Patterns",
            date: "2 hours ago",
            rating: 5,
            message: "The conceptual questions about hooks were brilliant. Really helped me clear my basics. Looking forward to more challenges!",
            responded: true
        },
        {
            studentName: "David Chen",
            initials: "DC",
            quizTitle: "Node.js Performance Tuning",
            date: "5 hours ago",
            rating: 3,
            message: "The time limit was a bit tight for the database optimization section. Can we get more detailed explanations for the answers?",
            responded: false
        },
        {
            studentName: "Sarah Miller",
            initials: "SM",
            quizTitle: "UI/UX Case Studies",
            date: "Yesterday",
            rating: 5,
            message: "Great case-based approach! It's much better than simple theory quizzes. High quality content by the educator.",
            responded: true
        },
        {
            studentName: "Emma Watson",
            initials: "EW",
            quizTitle: "Asynchronous Javascript",
            date: "2 days ago",
            rating: 4,
            message: "Had a small issue with question #14, I think the correct option was misplaced. Overall a great test of skills.",
            responded: false
        },
    ];

    const breadcrumbs = [{ label: "Communication Terminal", path: "/teacher/feedback" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Feedback Terminal"
                subtitle="Review student inquiries and optimize your challenges based on human insights."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Metric Overview */}
            <FeedbackStats />

            {/* 2. List Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 px-1">
                <div className="relative w-full lg:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search feedback or student..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-xs hover:bg-slate-50 transition-all">
                        <Filter size={16} /> All Ratings
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all italic">
                        <MessageSquare size={18} /> Announcements
                    </button>
                </div>
            </div>

            {/* 3. Feedback Feed */}
            <div className="space-y-6">
                {feedbackList.map((feedback, i) => (
                    <FeedbackCard key={i} feedback={feedback} index={i} />
                ))}
            </div>

            {/* Bottom Action */}
            <div className="mt-16 text-center">
                <button className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-all italic">
                    Load Older Communications
                </button>
            </div>
        </div>
    );
};

export default TeacherFeedback;