import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Star } from 'lucide-react';

const FeaturesHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-2xl text-white mb-8 shadow-xl shadow-indigo-200"
                >
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Built for Excellence</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tighter italic"
                >
                    Powerful Tools for <br />
                    <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Human Intelligence.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
                >
                    We’ve replaced generic AI logic with high-end teacher expertise and military-grade security. Explore what makes Quizora the professional’s choice.
                </motion.p>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0">
                <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
            </div>
        </section>
    );
};

export default FeaturesHero;