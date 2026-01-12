'use client';

import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react';

export default function AdminDashboardPage() {
    const stats = [
        { name: 'Total Revenue', value: '$12,345', icon: DollarSign, change: '+12%', color: 'text-green-500', bg: 'bg-green-500/10' },
        { name: 'Active Users', value: '1,234', icon: Users, change: '+5%', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { name: 'New Orders', value: '45', icon: ShoppingCart, change: '+23%', color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { name: 'Active Connections', value: '890', icon: Activity, change: '+8%', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-slate-950 p-6 rounded-xl border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.bg}`}>
                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                        <p className="text-sm text-gray-400">{stat.name}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-950 p-6 rounded-xl border border-white/10 h-80 flex flex-col justify-center items-center">
                    <p className="text-gray-500">Revenue Chart Placeholder</p>
                </div>
                <div className="bg-slate-950 p-6 rounded-xl border border-white/10 h-80 flex flex-col justify-center items-center">
                    <p className="text-gray-500">User Growth Chart Placeholder</p>
                </div>
            </div>
        </div>
    );
}
