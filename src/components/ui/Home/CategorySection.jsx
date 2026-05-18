import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Globe, Cpu, Target } from 'lucide-react';

const features = [
    {
        title: "AI Question Generator",
        desc: "Our smart AI creates unique questions every time to prevent cheating.",
        icon: <Cpu className="text-cyan-400" size={32} />,
        grid: "md:col-span-2",
        bg: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "Real-time Battle",
        desc: "Challenge friends in live quiz battles.",
        icon: <Zap className="text-amber-400" size={32} />,
        grid: "md:col-span-1",
        bg: "from-amber-500/20 to-orange-500/20"
    },
    {
        id: 3,
        title: "Anti-Cheat Engine",
        desc: "Advanced proctoring and tab-lock technology.",
        icon: <Shield className="text-emerald-400" size={32} />,
        grid: "md:col-span-1",
        bg: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Detailed Analytics",
        desc: "Track your progress with deep-dive performance charts.",
        icon: <BarChart3 className="text-indigo-400" size={32} />,
        grid: "md:col-span-2",
        bg: "from-indigo-500/20 to-purple-500/20"
    }
];

const Features = () => {
    return (
        <section className="relative py-32 bg-[#05070a] overflow-hidden">

            {/* --- UNIQUE ANIMATED BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- HEADER --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
                    >
                        <Target size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-300">Future of Learning</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter italic">
                        Everything You Need <br />
                        To <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-black">Level Up.</span>
                    </h2>
                </div>

                {/* --- BENTO GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
                            className={`${f.grid} group relative p-[1px] rounded-[2.5rem] overflow-hidden`}
                        >
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent group-hover:from-indigo-500/50 transition-all duration-500"></div>

                            {/* Card Body */}
                            <div className="relative h-full bg-[#0d1117] rounded-[2.5rem] p-10 flex flex-col justify-between">
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0 rounded-[2.5rem] blur-2xl"
                                    className={`${f.bg} absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                                />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-500">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4 italic tracking-tight">{f.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed font-medium">{f.desc}</p>
                                </div>

                                <div className="relative z-10 mt-10">
                                    <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-700"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;