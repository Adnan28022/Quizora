import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ShieldCheck, Calendar, Trophy } from 'lucide-react';

const ProfileHero = ({ user }) => {
    return (
        <div className="relative mb-12">
            {/* Minimalist Cover Area */}
            <div className="h-40 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[2.5rem] w-full shadow-2xl shadow-indigo-100 opacity-90"></div>

            <div className="flex flex-col md:flex-row items-end px-10 -mt-16 gap-6 relative z-10">
                {/* Avatar with Edit Button */}
                <div className="relative group">
                    <div className="w-32 h-32 rounded-[2.5rem] bg-white p-2 shadow-2xl">
                        <div className="w-full h-full rounded-[2rem] bg-slate-900 flex items-center justify-center text-white text-4xl font-black italic shadow-inner uppercase">
                            {user.initials}
                        </div>
                    </div>
                    <button className="absolute bottom-2 right-2 p-2.5 bg-white border border-slate-100 text-indigo-600 rounded-xl shadow-xl hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-110">
                        <Camera size={18} />
                    </button>
                </div>

                {/* User Quick Info */}
                <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">{user.name}</h2>
                        <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-emerald-100">
                            <ShieldCheck size={12} /> Verified Learner
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6 mt-3">
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                            <Calendar size={14} className="text-indigo-500" /> Member since 2023
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                            <Trophy size={14} className="text-amber-500" /> Rank #42 Globally
                        </div>
                    </div>
                </div>

                <div className="pb-2 hidden lg:block">
                    <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-indigo-600 transition-all active:scale-95">
                        Share Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileHero;