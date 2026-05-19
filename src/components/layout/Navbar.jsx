import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, LayoutGrid, Trophy, Smartphone, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Explore', path: '/', icon: <LayoutGrid size={20} className="text-indigo-600" /> },
        { name: 'Challenges', path: '/quizzes', icon: <Trophy size={20} className="text-purple-600" /> },
        { name: 'Features', path: '/features', icon: <Sparkles size={20} className="text-amber-500" /> },
    ];

    return (
        <>
            {/* Navbar Wrapper */}
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-10 ${scrolled ? 'py-2' : 'py-5'
                }`}>
                <div className={`max-w-7xl mx-auto px-6 py-3 rounded-2xl transition-all duration-500 flex justify-between items-center ${scrolled
                    ? 'bg-white shadow-xl border border-slate-100'
                    : 'bg-white/50 backdrop-blur-md border border-white/30'
                    }`}>

                    {/* LOGO AREA */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative flex items-center justify-center">
                            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl rotate-12 group-hover:rotate-0 transition-all duration-500"></div>
                            <Sparkles className="absolute text-white" size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
                                Quiz<span className="text-indigo-600">ora</span>
                            </span>
                            <span className="text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase leading-none">Intelligence</span>
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-bold uppercase tracking-widest transition-all ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="hidden lg:flex items-center gap-4">

                        <Link to="/auth/login">
                            <button className="px-5 py-2 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                                Login
                            </button>
                        </Link>

                        <Link to="/auth/signup">
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
                                Get Started <ArrowRight size={16} />
                            </button>
                        </Link>

                    </div>

                    {/* MOBILE TOGGLER */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 bg-indigo-50 text-indigo-600 rounded-lg"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[110] lg:hidden flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-2xl font-black italic">QUIZ<span className="text-indigo-600">ORA</span></span>
                            <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={28} /></button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-4 text-3xl font-black text-slate-800 hover:text-indigo-600 transition-colors uppercase italic"
                                >
                                    {link.icon} {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-4">

                            <Link to="/signup">
                                <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-indigo-100">
                                    SIGN UP FREE
                                </button>
                            </Link>

                            <Link to="/login">
                                <button className="w-full py-5 border-2 border-slate-100 rounded-2xl font-bold text-slate-500 text-xl">
                                    LOG IN
                                </button>
                            </Link>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;