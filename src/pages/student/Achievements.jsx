import React from 'react';
import { Zap, Target, BookOpen, Users, Shield, Trophy, Flame, Rocket } from 'lucide-react';
import BreadcrumbBanner from '../../components/student/Banner';
import AchievementStats from '../../components/student/achievements/AchievementStats';
import AchievementProgress from '../../components/student/achievements/AchievementProgress';
import BadgeCard from '../../components/student/achievements/BadgeCard';

const Achievements = () => {
    const badges = [
        { title: "First Flight", desc: "Completed your first ever quiz challenge.", icon: <Rocket />, color: "from-blue-500 to-cyan-500", unlocked: true },
        { title: "Streak Master", desc: "Maintained a 7-day login and quiz streak.", icon: <Flame />, color: "from-orange-500 to-red-500", unlocked: true },
        { title: "Perfect 100", desc: "Scored full marks in a professional quiz.", icon: <Trophy />, color: "from-amber-400 to-orange-500", unlocked: true },
        { title: "Speed Demon", desc: "Finished a 20-minute quiz in under 5 minutes.", icon: <Zap />, color: "from-purple-500 to-indigo-600", unlocked: true },
        { title: "Social Scholar", desc: "Shared 10 results on global leaderboard.", icon: <Users />, color: "from-pink-500 to-rose-500", unlocked: false, req: "Share 6 more results" },
        { title: "Guardian", desc: "Attempted 5 quizzes without any tab-lock alerts.", icon: <Shield />, color: "from-emerald-500 to-teal-600", unlocked: false, req: "2 more clean quizzes" },
        { title: "Polymath", desc: "Scored 80%+ in 5 different categories.", icon: <BookOpen />, color: "from-violet-500 to-fuchsia-600", unlocked: false, req: "3 more categories" },
        { title: "Sniper", desc: "Reached 98% overall accuracy in all attempts.", icon: <Target />, color: "from-sky-500 to-indigo-500", unlocked: false, req: "Increase accuracy by 4%" },
    ];

    const breadcrumbs = [{ label: "Trophy Room", path: "/student/awards" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Trophy Room"
                subtitle="Your journey of excellence, captured in badges and achievements."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Global Metrics */}
            <AchievementStats />

            {/* 2. Featured Progression Milestone */}
            <AchievementProgress />

            {/* 3. Badge Grid */}
            <div className="mt-16">
                <div className="flex justify-between items-center mb-10 px-2">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tighter uppercase">Your <span className="text-indigo-600">Badges</span></h3>
                    <div className="flex gap-4">
                        <button className="text-[10px] font-black uppercase text-indigo-600 tracking-widest bg-indigo-50 px-5 py-2 rounded-xl">All Badges</button>
                        <button className="text-[10px] font-black uppercase text-slate-400 px-5 py-2 hover:text-indigo-600 transition-all">Unlocked</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {badges.map((badge, i) => (
                        <BadgeCard key={i} badge={badge} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;