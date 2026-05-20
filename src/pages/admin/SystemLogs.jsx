import React from 'react';
import BreadcrumbBanner from '../../components/admin/Banner';
import { Terminal, ShieldCheck, UserPlus, AlertCircle } from 'lucide-react';

const SystemLogs = () => {
    const logs = [
        { id: "LOG-901", user: "Sarah Miller", action: "Quiz Published", target: "Advanced React", status: "Success", time: "10:14:02 AM" },
        { id: "LOG-902", user: "Alex Johnson", action: "User Suspension", target: "Account #502", status: "Security", time: "09:30:12 AM" },
        { id: "LOG-903", user: "System Auto", action: "Database Backup", target: "Main Node", status: "Success", time: "04:00:00 AM" },
    ];

    return (
        <div className="pb-10">
            <BreadcrumbBanner title="Audit Terminal" subtitle="Detailed log records of all system activities and administrative actions." breadcrumbs={[{ label: "Audit Logs", path: "/admin/logs" }]} />
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex items-center gap-3">
                    <Terminal className="text-indigo-600" />
                    <h3 className="text-xl font-black italic uppercase tracking-tighter">Master <span className="text-indigo-600">Audit Trail</span></h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Reference ID</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Operator</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Action Protocol</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {logs.map((log, i) => (
                                <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                                    <td className="p-6 text-xs font-black text-indigo-600">{log.id}</td>
                                    <td className="p-6 text-xs font-bold text-slate-700 uppercase italic">{log.user}</td>
                                    <td className="p-6">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-slate-900 uppercase">{log.action}</span>
                                            <span className="text-[10px] text-slate-400 font-bold uppercase">{log.target}</span>
                                        </div>
                                    </td>
                                    <td className="p-6 text-[10px] font-black text-slate-400 italic">[{log.time}]</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SystemLogs;