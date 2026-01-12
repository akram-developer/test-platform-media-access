'use client';

import { FAKE_USER } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Search } from 'lucide-react';

export default function AdminUsersPage() {
    const users = [
        FAKE_USER,
        { id: 'user_456', name: 'Alice Smith', email: 'alice@example.com', role: 'USER', status: 'ACTIVE' },
        { id: 'user_789', name: 'Bob Wilson', email: 'bob@example.com', role: 'USER', status: 'EXPIRED' },
        { id: 'user_999', name: 'Admin User', email: 'admin@media-access.one', role: 'ADMIN', status: 'ACTIVE' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-white">Users Management</h1>
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full text-left text-sm text-gray-400">
                    <thead className="bg-slate-900 text-gray-200 uppercase font-medium">
                        <tr>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 bg-blue-900/50 rounded-full flex items-center justify-center text-xs font-bold text-blue-300 mr-3">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-medium text-white">{user.name}</div>
                                            <div className="text-xs text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${(user.role || 'USER') === 'ADMIN' ? 'bg-purple-900/30 text-purple-400' : 'bg-gray-800 text-gray-300'
                                        }`}>
                                        {user.role || 'USER'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${(user.status || 'ACTIVE') === 'ACTIVE' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                                        }`}>
                                        {user.status || 'ACTIVE'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
