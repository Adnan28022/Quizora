import React from 'react';
import AdminProjectStats from '../../components/admin/dashboard/AdminProjectStats';
import TeacherRequestTerminal from '../../components/admin/dashboard/TeacherRequestTerminal';
import TopTeachersCard from '../../components/admin/dashboard/TopTeachersCard';
import PlatformRecentActivity from '../../components/admin/dashboard/PlateformRecentActivity';

const AdminDashboard = () => {
    const breadcrumbs = [{ label: "Master Control", path: "/admin/dashboard" }];

    return (
        <div className="pb-10">

            {/* 1. Main Project Stats */}
            <AdminProjectStats />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* 2. Top Performing Educators (4 Columns) */}
                <div className="lg:col-span-4">
                    <TopTeachersCard />
                </div>

                {/* 3. New Verifications (8 Columns) */}
                <div className="lg:col-span-8">
                    <TeacherRequestTerminal />
                </div>
            </div>

            {/* 4. Live Activity Feed */}
            <div className="mt-8">
                <PlatformRecentActivity />
            </div>
        </div>
    );
};

export default AdminDashboard;