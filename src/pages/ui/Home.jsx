import React from 'react';
import Hero from '../../components/ui/Home/HeroSection';
import Features from '../../components/ui/Home/CategorySection';
import Leaderboard from '../../components/ui/Home/LeaderBoard';
import Process from '../../components/ui/Home/Process';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Process />
            <Features />
            <Leaderboard />
        </div>
    );
};

export default Home;