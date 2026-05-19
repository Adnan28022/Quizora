import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Compass, ArrowLeft, RotateCcw, AlertTriangle } from 'lucide-react';

const NotFound = () => {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        // Countdown timer logic
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        // 5 seconds baad pichle page par redirect
        const redirect = setTimeout(() => {
            navigate(-1); // Pichle page par wapis le jaye ga jahan se user aya tha
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [navigate]);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden relative">

            {/* --- BACKGROUND ORNAMENTS --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-60" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-60" />
            </div>

            <div className="max-w-xl w-full text-center relative z-10">

                {/* Animated Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 1.2 }}
                    className="w-32 h-32 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-indigo-200"
                >
                    <Compass size={60} className="text-white animate-pulse" />
                </motion.div>

                {/* Error Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-[10rem] font-black text-slate-900 leading-none italic tracking-tighter opacity-10 absolute left-1/2 -translate-x-1/2 -top-10 -z-10 select-none">
                        404
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tight uppercase mb-4">
                        Lost in <span className="text-indigo-600">Space?</span>
                    </h2>
                    <p className="text-slate-500 font-bold text-lg mb-10">
                        The page you are looking for doesn't exist or has been moved to another dimension.
                    </p>
                </motion.div>

                {/* Redirect UI */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem]"
                >
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3">
                            <RotateCcw size={20} className="text-indigo-600 animate-spin" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                                Automatic Redirect in <span className="text-indigo-600 text-lg">{countdown}s</span>
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="h-full bg-indigo-600 rounded-full"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
                            >
                                <ArrowLeft size={16} /> Go Back Now
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="flex-1 py-4 border-2 border-slate-100 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-indigo-600 hover:text-indigo-600 transition-all"
                            >
                                Return Home
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Alert */}
                <div className="mt-12 flex items-center justify-center gap-2 text-slate-300">
                    <AlertTriangle size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Protocol 404: Navigation Fault</span>
                </div>
            </div>
        </div>
    );
};

export default NotFound;