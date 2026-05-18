import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Eye, Lock, Fingerprint } from 'lucide-react';

const SecuritySection = () => {
    return (
        <section className="py-32 bg-slate-900 overflow-hidden relative">
            {/* Decorative Scan Line */}
            <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-indigo-500/30 blur-sm z-0"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <div>
                        <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8 italic tracking-tighter">
                            Military Grade <br />
                            <span className="text-indigo-500">Security Engine.</span>
                        </h2>
                        <div className="space-y-8">
                            {[
                                { icon: <Lock />, title: "Tab Lock Technology", desc: "Quiz automatically ends if user tries to switch browser tabs." },
                                { icon: <Fingerprint />, title: "Identity Verification", desc: "Unique user session tracking to prevent proxy attempts." },
                                { icon: <Eye />, title: "Proctoring Mode", desc: "Real-time monitoring of user activity during the challenge." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="relative z-10 p-10 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-xl">
                            <div className="flex flex-col items-center gap-6">
                                <div className="relative">
                                    <ShieldAlert size={120} className="text-indigo-500 animate-pulse" />
                                    <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20" />
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-black text-2xl uppercase italic tracking-widest">System Armed</p>
                                    <p className="text-indigo-400 font-bold text-xs mt-2 uppercase tracking-[0.4em]">Anti-Cheat Active</p>
                                </div>
                            </div>
                        </div>
                        {/* Random glowing particles */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[100px] opacity-30" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SecuritySection;