import React from 'react';
import BreadcrumbBanner from '../../components/student/Banner';
import ResultSummary from '../../components/student/result/ResultSummary';
import ResultRow from '../../components/student/result/ResultRow';
import PerformanceInsight from '../../components/student/result/PerformanceInsight';

const MyResults = () => {
    const results = [
        { id: 1, title: "Modern React Patterns", date: "Oct 24, 2023", score: 92, rank: 12 },
        { id: 2, title: "UI Design Principles", date: "Oct 20, 2023", score: 85, rank: 45 },
        { id: 3, title: "Database Systems", date: "Oct 15, 2023", score: 62, rank: 110 },
        { id: 4, title: "E-Commerce Strategy", date: "Oct 10, 2023", score: 78, rank: 32 },
    ];

    const breadcrumbs = [
        { label: "My Performance", path: "/student/results" }
    ];

    return (
        <div className="pb-10">
            {/* 1. Global Banner */}
            <BreadcrumbBanner
                title="Result Terminal"
                subtitle="Deep dive into your quiz performance and track your growth."
                breadcrumbs={breadcrumbs}
            />

            {/* 2. Top Analytics Summary */}
            <ResultSummary />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
                {/* 3. Detailed Results List (8 Columns) */}
                <div className="lg:col-span-8">
                    <div className="flex justify-between items-center mb-6 px-2">
                        <h3 className="text-lg font-black text-slate-900 italic uppercase tracking-tighter">History <span className="text-slate-300 font-medium">Log</span></h3>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-[10px] font-bold text-slate-500 bg-white border border-slate-200 rounded-lg">Last 30 Days</button>
                        </div>
                    </div>

                    <div className="no-scrollbar overflow-y-auto max-h-[600px]">
                        {results.map((res, i) => (
                            <ResultRow key={res.id} result={res} index={i} />
                        ))}
                    </div>
                </div>

                {/* 4. Strategic Insights (4 Columns) */}
                <div className="lg:col-span-4">
                    <PerformanceInsight />
                </div>
            </div>
        </div>
    );
};

export default MyResults;