import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, BookOpen, Clock, Loader2 } from 'lucide-react';
import { getProfile } from '../../../redux/reducer/auth/AuthSlice';

const StatCards = () => {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        // Fetch latest points/stats from profile
        dispatch(getProfile());
    }, [dispatch]);

    const stats = [
        { label: "Total Points", val: user?.totalPoints || 0, icon: <Trophy size={20} />, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "Success Rate", val: "85%", icon: <TrendingUp size={20} />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Quizzes Taken", val: user?.quizzesAttempted || 0, icon: <BookOpen size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Learning Level", val: user?.totalPoints > 500 ? "Pro" : "Newbie", icon: <Clock size={20} />, color: "text-purple-600", bg: "bg-purple-50" },
    ];

    if (isLoading) return <div className="flex justify-center p-5"><Loader2 className="animate-spin text-indigo-600" /></div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all group"
                >
                    <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        {stat.icon}
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest leading-none mb-1.5">{stat.label}</p>
                        <p className="text-xl font-bold text-slate-900 leading-none">{stat.val}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatCards;