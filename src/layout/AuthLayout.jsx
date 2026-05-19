import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 overflow-hidden relative">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px]"
                />
            </div>

            {/* Brand Logo */}
            <Link to="/" className="relative z-10 flex items-center gap-3 mb-10 group">
                <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-xl shadow-indigo-100 group-hover:rotate-[360deg] transition-transform duration-700">
                    <GraduationCap className="text-white" size={30} />
                </div>
                <span className="text-3xl font-black italic tracking-tighter text-slate-900 uppercase">
                    Quiz<span className="text-indigo-600">ora</span>
                </span>
            </Link>

            {/* Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 relative z-10"
            >
                <Outlet />
            </motion.div>

            {/* Footer Note */}
            <p className="relative z-10 mt-10 text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">
                Secure Intelligence Terminal • V2.4
            </p>
        </div>
    );
};

export default AuthLayout;