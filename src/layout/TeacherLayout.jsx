import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TeacherSidebar from '../components/layout/TeacherSidebar';
import TeacherHeader from '../components/layout/TeacherHeader';

const TeacherLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [mobileSidebar, setMobileSidebar] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans">

            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <TeacherSidebar isCollapsed={isCollapsed} />
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileSidebar && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
                            onClick={() => setMobileSidebar(false)}
                        />
                        <motion.div
                            initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
                            className="fixed inset-y-0 left-0 z-[70] w-full max-w-[280px]"
                        >
                            <TeacherSidebar isCollapsed={false} isMobile={true} setMobileSidebar={setMobileSidebar} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Wrapper */}
            <div className="flex-1 flex flex-col min-w-0">
                <TeacherHeader
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}
                    setMobileSidebar={setMobileSidebar}
                />

                <main className="flex-1 p-4 lg:p-8 overflow-y-auto no-scrollbar bg-slate-50/50">
                    <div className="max-w-[1600px] mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TeacherLayout;