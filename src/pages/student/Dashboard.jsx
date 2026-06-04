import React from 'react';
import WelcomeBanner from '../../components/student/dashboard/WelcomeBanner';
import StatCards from '../../components/student/dashboard/StatCards';
import RecentActivity from '../../components/student/dashboard/RecentActivity';

const StudentDashboard = () => {
    return (
        <div className="pb-10">
            {/* 1. Header Section */}
            <WelcomeBanner userName="Alex Johnson" />

            {/* 2. Top Metrics Grid */}
            <StatCards />

            {/* 3. Main Dashboard Layout */}
            <div className="grid gap-8">
                {/* Left Side: Recent Activity (8 Columns) */}
                <div>
                    <RecentActivity />
                </div>
            </div>

            {/* Mazeed sections yahan add ho sakte hain (like Top Educators, etc.) */}
        </div>
    );
};

export default StudentDashboard;