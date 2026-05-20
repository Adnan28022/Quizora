import React from 'react';
import BreadcrumbBanner from '../../components/admin/Banner';
import AnalyticsMacroStats from '../../components/admin/platfornanalytics/AnalyticsMacroStats';
import CategoryHeatmap from '../../components/admin/platfornanalytics/CategoryHeatMap';
import ViralContent from '../../components/admin/platfornanalytics/ViralContent';
import { Download, Calendar, Filter } from 'lucide-react';

const PlatformAnalytics = () => {
    const breadcrumbs = [{ label: "Global Intelligence", path: "/admin/analytics" }];

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Intelligence Terminal"
                subtitle="High-fidelity data stream of platform engagement, user retention, and content vitality."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Global Metric Grid */}
            <AnalyticsMacroStats />

            {/* 2. Analytical Tools Control */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
                <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm w-full lg:w-auto">
                    <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg italic">Real-time</button>
                    <button className="px-6 py-2.5 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all italic">Monthly</button>
                    <button className="px-6 py-2.5 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all italic">Yearly</button>
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-100 text-slate-500 rounded-2xl font-bold text-xs hover:bg-slate-50 transition-all italic">
                        <Calendar size={16} /> Date Range
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-indigo-600 transition-all italic">
                        <Download size={18} /> Export Terminal Data
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* 3. Subject Heatmap (7 Columns) */}
                <div className="lg:col-span-7">
                    <CategoryHeatmap />
                </div>

                {/* 4. Content Vitality (5 Columns) */}
                <div className="lg:col-span-5">
                    <ViralContent />
                </div>
            </div>

            {/* Platform Health Footnote */}
            <div className="mt-12 p-8 bg-indigo-50 border border-indigo-100 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner">
                <div>
                    <h4 className="text-sm font-black text-indigo-900 uppercase tracking-widest italic">Node Sync Status</h4>
                    <p className="text-[11px] font-medium text-indigo-600 mt-1 uppercase tracking-tight">All platform modules are operating at 99.9% efficiency.</p>
                </div>
                <div className="h-2 w-32 bg-indigo-200 rounded-full overflow-hidden">
                    <div className="w-[99%] h-full bg-indigo-600"></div>
                </div>
            </div>
        </div>
    );
};

export default PlatformAnalytics;