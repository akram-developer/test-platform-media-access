'use client';

import { MY_SERVICES } from '@/lib/mockData';
import { Copy, Eye, EyeOff, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function AccessPage() {
    const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});

    const togglePassword = (id: string) => {
        setShowPassword(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">My Active Subscriptions</h1>
            </div>

            <div className="grid gap-6">
                {MY_SERVICES.map((service) => (
                    <div key={service.id} className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden">
                        <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <Server className="h-5 w-5 text-gray-400" />
                                <span className="font-semibold text-white">{service.planName}</span>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${service.status === 'ACTIVE' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                                }`}>
                                {service.status}
                            </span>
                        </div>

                        <div className="p-6 grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-500 uppercase font-semibold">Username</label>
                                    <div className="flex items-center mt-1">
                                        <code className="bg-slate-900 px-3 py-2 rounded text-blue-400 font-mono text-sm flex-1">
                                            {service.username}
                                        </code>
                                        <Button variant="ghost" size="icon" className="ml-2 text-gray-400 hover:text-white">
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase font-semibold">Password</label>
                                    <div className="flex items-center mt-1">
                                        <code className="bg-slate-900 px-3 py-2 rounded text-blue-400 font-mono text-sm flex-1">
                                            {showPassword[service.id] ? 'password123' : '••••••••'}
                                        </code>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="ml-2 text-gray-500 hover:text-white"
                                            onClick={() => togglePassword(service.id)}
                                        >
                                            {showPassword[service.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-500 uppercase font-semibold">Host / URL</label>
                                    <div className="flex items-center mt-1">
                                        <code className="bg-slate-900 px-3 py-2 rounded text-gray-300 font-mono text-xs break-all flex-1">
                                            {service.host}
                                        </code>
                                        <Button variant="ghost" size="icon" className="ml-2 text-gray-400 hover:text-white">
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase font-semibold">Expires At</label>
                                    <p className="mt-1 text-white font-medium">{service.expiresAt}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-900/10 border-t border-blue-900/20">
                            <p className="text-xs text-blue-300 text-center">
                                Need help setting up? Check our <a href="/how-it-works" className="underline hover:text-white">Setup Guide</a>.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
