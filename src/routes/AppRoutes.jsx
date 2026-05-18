import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer'
import Home from '../pages/ui/Home';
import Challenges from '../pages/ui/Challenges';
import Features from '../pages/ui/Features';
// Yeh Layout wrapper hai jo har page par Navbar aur Footer dikhaye ga
const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
            <Navbar />
            <main className="flex-grow">
                <Outlet /> {/* Yahan Home aur baqi pages render honge */}
            </main>
            <Footer />
        </div>
    );
};

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path='/quizzes' element={<Challenges />} />
                    <Route path='/features' element={<Features />} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;