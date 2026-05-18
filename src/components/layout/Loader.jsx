import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Minimalist Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative flex flex-col items-center">

                {/* --- CENTERED RING & ICON GROUP --- */}
                <div className="relative w-28 h-28 flex items-center justify-center">
                    {/* Animated Outer Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-[2.5rem] border-[3px] border-slate-200 border-t-indigo-600"
                    />

                    {/* Central Branding Icon Badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [0.9, 1.05, 0.9], opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/40 relative z-10"
                    >
                        <GraduationCap className="text-white" size={32} />
                    </motion.div>
                </div>

                {/* --- BRAND TEXT --- */}
                <div className="mt-10 text-center">
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tighter uppercase italic leading-none">
                        Quiz<span className="text-indigo-600">ora</span>
                    </h2>
                    <p className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-2">
                        Intelligence System
                    </p>

                    {/* Animated Dots */}
                    <div className="flex items-center gap-1.5 justify-center mt-4">
                        {[0, 0.2, 0.4].map((delay, i) => (
                            <motion.span
                                key={i}
                                animate={{ y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1, repeat: Infinity, delay }}
                                className="w-1.5 h-1.5 bg-indigo-600 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <p className="absolute bottom-10 text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">
                Synchronizing Quiz Data
            </p>
        </div>
    );
};

export default Loader;