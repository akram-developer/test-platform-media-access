'use client';

import { FAKE_USER } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { User, Mail, Lock } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-white">My Profile</h1>

            <div className="bg-slate-950 p-8 rounded-xl border border-white/10 space-y-8">
                <div className="flex items-center space-x-6">
                    <div className="h-24 w-24 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold text-white uppercase border-4 border-slate-900 shadow-lg">
                        {FAKE_USER.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">{FAKE_USER.name}</h2>
                        <p className="text-gray-400">Customer since 2024</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-semibold">
                            Verified Account
                        </span>
                    </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-white/5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 flex items-center">
                            <User className="w-4 h-4 mr-2" /> Full Name
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                value={FAKE_USER.name}
                                readOnly
                                className="flex-1 bg-slate-900 border border-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none"
                            />
                            <Button variant="secondary" className="rounded-l-none border-l-0 border-gray-600">Edit</Button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 flex items-center">
                            <Mail className="w-4 h-4 mr-2" /> Email Address
                        </label>
                        <input
                            type="email"
                            value={FAKE_USER.email}
                            readOnly
                            className="w-full bg-slate-900 border border-gray-700 text-gray-400 rounded-md px-4 py-2 focus:outline-none cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-500">Email cannot be changed directly. Contact support.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 flex items-center">
                            <Lock className="w-4 h-4 mr-2" /> Password
                        </label>
                        <div className="flex items-center justify-between bg-slate-900 border border-gray-700 rounded-md px-4 py-2">
                            <span className="text-gray-400">•••••••••••••</span>
                            <Button variant="link" className="text-blue-500 h-auto p-0">Change Password</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-6 flex justify-end">
                    <Button variant="destructive">Delete Account</Button>
                </div>
            </div>
        </div>
    );
}
