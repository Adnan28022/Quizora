import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";

import { GraduationCap, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-900 pt-20 overflow-hidden">

            {/* --- CTA SECTION (The Floating Card) --- */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 -translate-y-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(79,70,229,0.5)]"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 italic tracking-tighter">
                                Ready to Boost <br /> Your IQ Level?
                            </h2>
                            <p className="text-indigo-100 text-lg font-medium max-w-md">
                                Join thousands of students today and start your journey towards excellence. It's free and always will be.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                            <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 group">
                                Get Started Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-10 py-5 bg-indigo-500/30 text-white border border-indigo-400/50 rounded-2xl font-black text-lg hover:bg-indigo-500/50 transition-all backdrop-blur-md">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- MAIN FOOTER CONTENT --- */}
            <div className="max-w-7xl mx-auto px-6 pb-12 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-indigo-600 p-2 rounded-xl text-white">
                                <GraduationCap size={24} />
                            </div>
                            <span className="text-2xl font-black text-white italic tracking-tighter uppercase">
                                Quiz<span className="text-indigo-500">ora</span>
                            </span>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Quizora is a leading platform for digital assessments and interactive learning.
                            Making education fun and accessible for everyone.
                        </p>
                        <div className="flex gap-4">
                            {[FaGithub, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {['Explore Quizzes', 'Global Leaderboard', 'Category List', 'Join Community', 'About Quizora'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 font-bold hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Get in Touch</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-slate-400">
                                <MapPin className="text-indigo-500 shrink-0" size={20} />
                                <span className="font-medium">123 Learning Street, Tech Valley, CA 94043</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400">
                                <Phone className="text-indigo-500 shrink-0" size={20} />
                                <span className="font-medium">+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400">
                                <Mail className="text-indigo-500 shrink-0" size={20} />
                                <span className="font-medium">hello@quizora.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Newsletter</h4>
                        <p className="text-slate-400 font-medium mb-6">Receive latest quiz updates and news.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-slate-800 border border-slate-700 rounded-2xl py-4 pl-5 pr-12 text-white outline-none focus:border-indigo-600 transition-all font-bold"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white hover:bg-indigo-500 transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 font-bold text-sm">
                        © {currentYear} Quizora Intelligence System. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;