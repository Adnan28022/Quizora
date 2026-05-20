import React from 'react';

const CategoryHeatmap = () => {
    const data = [
        { name: "Development", percentage: 85, color: "bg-indigo-600" },
        { name: "Business", percentage: 62, color: "bg-purple-500" },
        { name: "Science", percentage: 48, color: "bg-emerald-500" },
        { name: "Design", percentage: 35, color: "bg-amber-500" },
        { name: "Marketing", percentage: 24, color: "bg-rose-500" },
    ];

    return (
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm h-full">
            <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tighter mb-8">Category <span className="text-indigo-600">Distribution</span></h3>

            <div className="space-y-6">
                {data.map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between items-center mb-2 px-1">
                            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">{item.name}</span>
                            <span className="text-[11px] font-black text-indigo-600">{item.percentage}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                                style={{ width: `${item.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center italic leading-relaxed">
                    Visualizing 1.2M engagement points across all nodes.
                </p>
            </div>
        </div>
    );
};

export default CategoryHeatmap;