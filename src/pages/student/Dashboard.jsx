import React from 'react';
import WelcomeBanner from '../../components/student/dashboard/WelcomeBanner';
import StatCards from '../../components/student/dashboard/StatCards';
import RecentActivity from '../../components/student/dashboard/RecentActivity';
import GoalCard from '../../components/student/dashboard/GoalCard';

const StudentDashboard = () => {
    return (
        <div className="pb-10">
            {/* 1. Header Section */}
            <WelcomeBanner userName="Alex Johnson" />

            {/* 2. Top Metrics Grid */}
            <StatCards />

            {/* 3. Main Dashboard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Side: Recent Activity (8 Columns) */}
                <div className="lg:col-span-8">
                    <RecentActivity />
                </div>

                {/* Right Side: Progress Goal (4 Columns) */}
                <div className="lg:col-span-4">
                    <GoalCard />
                </div>
            </div>

            {/* Mazeed sections yahan add ho sakte hain (like Top Educators, etc.) */}
        </div>
    );
};

export default StudentDashboard;