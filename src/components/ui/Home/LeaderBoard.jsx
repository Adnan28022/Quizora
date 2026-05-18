import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, TrendingUp, Medal, Star } from 'lucide-react';

const topScorers = [
    { id: 1, name: "Alex Johnson", score: 9850, rank: 1, avatar: "https://i.pravatar.cc/150?u=1", level: "Grandmaster" },
    { id: 2, name: "Sarah Williams", score: 9240, rank: 2, avatar: "https://i.pravatar.cc/150?u=2", level: "Master" },
    { id: 3, name: "David Chen", score: 8900, rank: 3, avatar: "https://i.pravatar.cc/150?u=3", level: "Expert" },
    { id: 4, name: "Emma Watson", score: 8450, rank: 4, avatar: "https://i.pravatar.cc/150?u=4", level: "Expert" },
];

const Leaderboard = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* --- LEFT SIDE: TEXT & STATS --- */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 text-indigo-600 mb-6">
                                <TrendingUp size={20} />
                                <span className="text-xs font-black uppercase tracking-[0.3em]">Live Rankings</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8 italic tracking-tighter">
                                Global <span className="text-indigo-600">Hall</span> of Fame.
                            </h2>
                            <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                                Compete with the best minds across the globe. Real-time scores, daily challenges, and legendary rewards await the top masters.
                            </p>

                            {/* Stats Mini Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                    <h4 className="text-3xl font-black text-slate-900">2.5M</h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Questions Solved</p>
                                </div>
                                <div className="p-6 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-100">
                                    <h4 className="text-3xl font-black text-white">45k</h4>
                                    <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest mt-1">Daily Active</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- RIGHT SIDE: FUTURISTIC TABLE --- */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative p-1 bg-gradient-to-br from-indigo-100 to-transparent rounded-[2.5rem]"
                        >
                            <div className="bg-white rounded-[2.4rem] shadow-2xl p-6 md:p-10">

                                {/* Table Header */}
                                <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-50">
                                    <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Top Performers</span>
                                    <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-full text-indigo-600">
                                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-black uppercase">Live Updates</span>
                                    </div>
                                </div>

                                {/* Rows */}
                                <div className="space-y-4">
                                    {topScorers.map((user, idx) => (
                                        <motion.div
                                            key={user.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                                            className="group flex items-center justify-between p-4 md:p-5 rounded-2xl border border-transparent transition-all duration-300 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4 md:gap-6">
                                                {/* Rank Badge */}
                                                <div className={`w-10 h-10 flex items-center justify-center font-black rounded-xl text-lg 
                          ${user.rank === 1 ? 'bg-amber-100 text-amber-600' :
                                                        user.rank === 2 ? 'bg-slate-100 text-slate-500' :
                                                            user.rank === 3 ? 'bg-orange-100 text-orange-600' : 'bg-transparent text-slate-300'}`}>
                                                    {user.rank === 1 ? <Crown size={20} /> : `#${user.rank}`}
                                                </div>

                                                {/* Avatar & Name */}
                                                <div className="flex items-center gap-4">
                                                    <img src={user.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt="" />
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{user.name}</h4>
                                                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{user.level}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Score */}
                                            <div className="text-right">
                                                <p className="text-xl font-black text-slate-900">{user.score.toLocaleString()}</p>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Points</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom Action */}
                                <div className="mt-10 text-center">
                                    <button className="text-sm font-black text-indigo-600 hover:text-slate-900 transition-colors uppercase tracking-[0.2em] flex items-center justify-center gap-2 w-full">
                                        View Full Leaderboard <Star size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Floating Trophy Icon */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-8 -right-8 w-20 h-20 bg-amber-400 rounded-3xl shadow-2xl shadow-amber-200 flex items-center justify-center text-white rotate-12"
                            >
                                <Trophy size={40} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leaderboard;