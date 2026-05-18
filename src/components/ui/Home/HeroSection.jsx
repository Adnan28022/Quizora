import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Star, Users, ShieldCheck, Trophy } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-white pt-20 lg:pt-32 pb-16 lg:pb-32 overflow-hidden">

            {/* --- BACKGROUND ORNAMENTS --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/40 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* --- LEFT CONTENT (6 Columns) --- */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Premium Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl mb-8">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-indigo-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/50?u=${i}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[12px] font-bold text-slate-600 tracking-wide">
                                    Loved by <span className="text-indigo-600">2,000+</span> active learners
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                The Smartest Way <br />
                                To <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Test Your Brain.</span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
                                Quizora transforms traditional learning into an interactive experience.
                                Compete globally, earn rewards, and master your favorite subjects with AI-driven assessments.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-5">
                                <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-200 hover:bg-slate-900 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
                                    Get Started Free <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                                        <Play size={18} fill="currentColor" />
                                    </div>
                                    Watch Demo
                                </button>
                            </div>

                            {/* Features List */}
                            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={20} className="text-green-500" />
                                    <span className="text-sm font-bold text-slate-500 tracking-tight">Anti-Cheat System</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles size={20} className="text-amber-500" />
                                    <span className="text-sm font-bold text-slate-500 tracking-tight">AI Insights</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star size={20} className="text-purple-500" />
                                    <span className="text-sm font-bold text-slate-500 tracking-tight">Global Ranking</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- RIGHT VISUAL (5 Columns) --- */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* Main Image Container */}
                            <div className="relative p-3 bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100">
                                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                        alt="Learning Platform"
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            </div>

                            {/* Floating UI Widget 1: Result Notification */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-6 -right-6 lg:-right-10 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 z-20 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200">
                                    <Trophy className="text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-900 leading-none">High Score!</p>
                                    <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mt-1">98% Accuracy</p>
                                </div>
                            </motion.div>

                            {/* Floating UI Widget 2: Live Activity */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -bottom-8 -left-6 lg:-left-12 bg-white px-6 py-5 rounded-3xl shadow-2xl border border-slate-50 z-20 flex flex-col gap-2"
                            >
                                <div className="flex items-center gap-3">
                                    <Users className="text-indigo-600" size={20} />
                                    <span className="text-sm font-black text-slate-900 leading-none">Real-time Stats</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map(h => (
                                        <div key={h} className={`w-1 bg-indigo-600 rounded-full animate-bounce`} style={{ height: `${h * 4}px`, animationDelay: `${h * 0.1}s` }} />
                                    ))}
                                    <span className="ml-2 text-[10px] font-bold text-slate-400">2.4k Joining...</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Background Circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-slate-50 rounded-full -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;