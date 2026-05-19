import React from 'react';
import BreadcrumbBanner from '../../components/student/Banner';
import LeaderboardPodium from '../../components/student/leaderboard/LeaderBoardPodium';
import UserRankCard from '../../components/student/leaderboard/UserRankCard';
import RankRow from '../../components/student/leaderboard/RankRow';

const Leaderboard = () => {
    const topThree = [
        { name: "Sarah Miller", points: "12,840", avatar: "https://i.pravatar.cc/150?u=sarah", level: "Grandmaster" },
        { name: "Arjun Mehta", points: "10,210", avatar: "https://i.pravatar.cc/150?u=arjun", level: "Master" },
        { name: "James Wilson", points: "9,850", avatar: "https://i.pravatar.cc/150?u=james", level: "Expert" }
    ];

    const ranks = [
        { rank: 4, name: "Elena Rodriguez", points: 8400, accuracy: 94, level: "Expert", avatar: "https://i.pravatar.cc/150?u=elena" },
        { rank: 5, name: "David Chen", points: 7920, accuracy: 89, level: "Professional", avatar: "https://i.pravatar.cc/150?u=david" },
        { rank: 6, name: "Emma Watson", points: 7650, accuracy: 91, level: "Professional", avatar: "https://i.pravatar.cc/150?u=emma" },
        { rank: 7, name: "Liam Neeson", points: 7200, accuracy: 85, level: "Intermediate", avatar: "https://i.pravatar.cc/150?u=liam" },
    ];

    const breadcrumbs = [{ label: "Leaderboard", path: "/student/leaderboard" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Global Leaderboard"
                subtitle="Witness the legends of Quizora. Keep grinding to reach the top."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. The Podium (Ranks 1-3) */}
            <LeaderboardPodium topThree={topThree} />

            {/* 2. Logged-in User's Status */}
            <UserRankCard />

            {/* 3. The Remaining Rankings */}
            <div className="mt-12">
                <div className="flex justify-between items-center mb-8 px-2">
                    <h3 className="text-lg font-bold text-slate-900 italic tracking-tight uppercase">Performance <span className="text-slate-300 font-medium">Arena</span></h3>
                    <div className="flex gap-3">
                        <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl">Weekly</button>
                        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4 py-2 hover:text-indigo-600 transition-all">All Time</button>
                    </div>
                </div>

                <div className="space-y-2">
                    {ranks.map((row, i) => (
                        <RankRow key={i} data={row} index={i} />
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-10 text-center">
                    <button className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-all">
                        Discover More Legends
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;