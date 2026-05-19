import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const BadgeCard = ({ badge, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 text-center overflow-hidden group
                ${badge.unlocked
                    ? 'bg-white border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50'
                    : 'bg-slate-50/50 border-transparent opacity-60'}`}
        >
            {/* Background Icon Decoration */}
            <div className={`absolute -right-4 -top-4 opacity-[0.03] transition-transform duration-700 group-hover:scale-150 group-hover:rotate-12
                ${badge.unlocked ? 'text-indigo-600' : 'text-slate-400'}`}>
                {React.cloneElement(badge.icon, { size: 120 })}
            </div>

            {/* Locked Overlay Icon */}
            {!badge.unlocked && (
                <div className="absolute top-4 right-4 text-slate-300">
                    <Lock size={18} />
                </div>
            )}

            {/* Badge Icon Container */}
            <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 transition-all duration-500
                ${badge.unlocked
                    ? `bg-gradient-to-br ${badge.color} text-white shadow-xl rotate-3 group-hover:rotate-12`
                    : 'bg-slate-200 text-slate-400 grayscale'}`}>
                {React.cloneElement(badge.icon, { size: 36 })}
            </div>

            <h3 className={`text-lg font-bold tracking-tight mb-2 uppercase italic ${badge.unlocked ? 'text-slate-900' : 'text-slate-400'}`}>
                {badge.title}
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed italic px-2">
                {badge.desc}
            </p>

            {/* Requirement Label */}
            {!badge.unlocked && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-[9px] font-black uppercase text-indigo-500 tracking-widest italic">
                        Requirement: {badge.req}
                    </p>
                </div>
            )}
        </motion.div>
    );
};

export default BadgeCard;