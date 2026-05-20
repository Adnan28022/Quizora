import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, Users, ShieldCheck, BarChart3,
    Settings, LogOut, GraduationCap, X, Layers,
    Database, Activity, Lock, AlertOctagon
} from 'lucide-react';

const AdminSidebar = ({ isCollapsed, isMobile, setMobileSidebar }) => {
    const adminMenu = [
        { name: "Global Overview", path: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
        { name: "Manage Users", path: "/admin/users", icon: <Users size={18} /> },
        { name: "Quiz Approvals", path: "/admin/approvals", icon: <ShieldCheck size={18} /> },
        { name: "Manage Teachers", path: "/admin/teachers", icon: <GraduationCap size={18} /> },
        { name: "Platform Analytics", path: "/admin/analytics", icon: <BarChart3 size={18} /> },
    ];

    return (
        <motion.aside
            animate={{ width: isCollapsed ? 85 : 280 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="h-screen bg-[#05070a] text-white flex flex-col sticky top-0 left-0 z-50 overflow-hidden shadow-2xl border-r border-white/5"
        >
            {/* Brand Logo */}
            <div className="p-6 h-20 flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                        <GraduationCap size={22} className="text-white" />
                    </div>
                    {!isCollapsed && (
                        <motion.span
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-xl font-black italic tracking-tighter uppercase"
                        >
                            Quiz<span className="text-indigo-500">ora</span>
                        </motion.span>
                    )}
                </div>
                {isMobile && (
                    <button onClick={() => setMobileSidebar(false)} className="p-2 text-slate-400 hover:text-white">
                        <X size={24} />
                    </button>
                )}
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto no-scrollbar">
                {!isCollapsed && (
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-4 ml-2 opacity-50 italic">System Root</p>
                )}
                {adminMenu.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => isMobile && setMobileSidebar(false)}
                        className={({ isActive }) => `
                            flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative
                            ${isActive
                                ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/20'
                                : 'text-slate-500 hover:bg-white/5 hover:text-white'}
                        `}
                    >
                        <div className="shrink-0 transition-transform group-hover:scale-110">{item.icon}</div>
                        {!isCollapsed && (
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[13px] font-semibold tracking-wide">
                                {item.name}
                            </motion.span>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Footer Warning Section */}
            <div className="p-4 border-t border-white/5 bg-slate-950/40 shrink-0">
                <button className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all group relative ${isCollapsed && !isMobile ? 'justify-center' : ''}`}>
                    <LogOut size={20} className="shrink-0 group-hover:rotate-12 transition-transform" />
                    {!isCollapsed && <span className="text-[13px] font-black uppercase tracking-widest leading-none text-red-500">Terminate Root</span>}
                </button>
            </div>
        </motion.aside>
    );
};

export default AdminSidebar;