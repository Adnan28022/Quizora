import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BookOpen, Rocket, Award } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Create Account",
        desc: "Join the community in seconds. Professional profile tracking starts here.",
        icon: <UserPlus size={30} />,
        color: "bg-indigo-600"
    },
    {
        id: "02",
        title: "Pick a Challenge",
        desc: "Select from hundreds of categories like Tech, Science, or Arts.",
        icon: <BookOpen size={30} />,
        color: "bg-purple-600"
    },
    {
        id: "03",
        title: "Attempt Quiz",
        desc: "Solve questions with our smart, anti-cheat enabled interface.",
        icon: <Rocket size={30} />,
        color: "bg-pink-600"
    },
    {
        id: "04",
        title: "Get Certified",
        desc: "Receive instant results, detailed analysis, and shareable certificates.",
        icon: <Award size={30} />,
        color: "bg-amber-500"
    }
];

const Process = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            {/* Background Text Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15rem] font-black text-slate-50/50 -z-0 pointer-events-none uppercase tracking-tighter italic select-none">
                JOURNEY
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic"
                    >
                        How <span className="text-indigo-600">Quizora</span> Works?
                    </motion.h2>
                    <p className="text-slate-500 font-bold mt-4 uppercase tracking-[0.2em] text-xs">Four simple steps to mastery</p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">

                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-24 left-0 w-full h-[2px] bg-slate-100 -z-10">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Step Number Backdrop */}
                            <span className="absolute -top-10 text-6xl font-black text-slate-50 group-hover:text-indigo-50 transition-colors">
                                {step.id}
                            </span>

                            {/* Icon Container */}
                            <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center text-white shadow-xl group-hover:rotate-[15deg] transition-transform duration-500 relative z-10`}>
                                {step.icon}
                                {/* Small indicator dot */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <div className={`w-2 h-2 ${step.color} rounded-full`} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-8">
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">{step.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed px-4">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Mobile connecting arrow (visible only on mobile) */}
                            {index !== steps.length - 1 && (
                                <div className="lg:hidden mt-8 text-slate-200">
                                    <Rocket size={24} className="rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
                >
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <img key={i} src={`https://i.pravatar.cc/100?u=${i + 10}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="user" />
                        ))}
                    </div>
                    <p className="text-slate-600 font-bold max-w-sm italic">
                        "The platform is so intuitive, I finished my first certification in under 10 minutes!"
                        <span className="block text-indigo-600 text-xs mt-1">— Mark Spencer, Senior Developer</span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Process;