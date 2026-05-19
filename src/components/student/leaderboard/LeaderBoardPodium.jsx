import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, Award } from 'lucide-react';

const LeaderboardPodium = ({ topThree }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-end px-2">
            {/* Rank 2 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="order-2 md:order-1 bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm text-center relative h-[280px] flex flex-col justify-center"
            >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 shadow-lg border-4 border-white">
                    <Medal size={32} />
                </div>
                <img src={topThree[1]?.avatar} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-slate-50 shadow-md" alt="" />
                <h3 className="text-lg font-bold text-slate-900 leading-none">{topThree[1]?.name}</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Rank #2</p>
                <p className="text-xl font-black text-indigo-600 mt-4">{topThree[1]?.points} <span className="text-[10px] text-slate-400">PTS</span></p>
            </motion.div>

            {/* Rank 1 - The Winner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="order-1 md:order-2 bg-slate-900 p-8 rounded-[3rem] shadow-2xl shadow-indigo-200 text-center relative h-[340px] flex flex-col justify-center border-4 border-indigo-600/20"
            >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-[2rem] bg-amber-400 flex items-center justify-center text-white shadow-2xl shadow-amber-200 animate-bounce">
                    <Crown size={40} />
                </div>
                <img src={topThree[0]?.avatar} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-xl" alt="" />
                <h3 className="text-xl font-black text-white leading-none italic uppercase tracking-tighter">{topThree[0]?.name}</h3>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mt-3 italic">Grandmaster • #1</p>
                <p className="text-3xl font-black text-white mt-6 tracking-tighter">{topThree[0]?.points} <span className="text-xs text-slate-500 tracking-normal uppercase">Points</span></p>
                {/* Decorative Glow */}
                <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-full -z-10" />
            </motion.div>

            {/* Rank 3 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="order-3 bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm text-center relative h-[250px] flex flex-col justify-center"
            >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-400 shadow-lg border-4 border-white">
                    <Award size={32} />
                </div>
                <img src={topThree[2]?.avatar} className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-slate-50 shadow-md" alt="" />
                <h3 className="text-lg font-bold text-slate-900 leading-none">{topThree[2]?.name}</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Rank #3</p>
                <p className="text-xl font-black text-indigo-600 mt-4">{topThree[2]?.points} <span className="text-[10px] text-slate-400">PTS</span></p>
            </motion.div>
        </div>
    );
};

export default LeaderboardPodium;