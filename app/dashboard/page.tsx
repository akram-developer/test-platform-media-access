'use client';

import Link from 'next/link';
import { Activity, Clock, ShoppingCart, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MY_SERVICES, FAKE_USER } from '@/lib/mockData';

export default function DashboardOverview() {
    const activeServices = MY_SERVICES.filter(s => s.status === 'ACTIVE').length;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Welcome back, {FAKE_USER.name}</h1>
                <p className="text-gray-400 mt-2">Here is an overview of your media access status.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-950 p-6 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400 font-medium">Active Subscriptions</p>
                            <h3 className="text-2xl font-bold text-white mt-1">{activeServices}</h3>
                        </div>
                        <div className="h-10 w-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <Activity className="h-5 w-5 text-green-500" />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-950 p-6 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400 font-medium">Total Orders</p>
                            <h3 className="text-2xl font-bold text-white mt-1">{MY_SERVICES.length}</h3>
                        </div>
                        <div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="h-5 w-5 text-blue-500" />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-950 p-6 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400 font-medium">Support Tickets</p>
                            <h3 className="text-2xl font-bold text-white mt-1">0</h3>
                        </div>
                        <div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                            <AlertCircle className="h-5 w-5 text-purple-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions / Recent Access */}
            <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">Your Media Access</h3>
                    <Link href="/dashboard/access">
                        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-400 p-0 hover:bg-transparent">
                            View All
                        </Button>
                    </Link>
                </div>
                <div className="divide-y divide-white/5">
                    {MY_SERVICES.map((service) => (
                        <div key={service.id} className="p-6 flex items-center justify-between">
                            <div>
                                <h4 className="font-medium text-white">{service.planName}</h4>
                                <p className="text-sm text-gray-500 mt-1">Expires: {service.expiresAt}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${service.status === 'ACTIVE'
                                        ? 'bg-green-500/10 text-green-500'
                                        : 'bg-red-500/10 text-red-500'
                                    }`}>
                                    {service.status}
                                </span>
                                {service.status === 'ACTIVE' ? (
                                    <Link href={`/dashboard/access?id=${service.id}`}>
                                        <Button size="sm" variant="outline" className="border-gray-700 text-gray-300">
                                            View Details
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link href="/pricing">
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                            Renew
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
