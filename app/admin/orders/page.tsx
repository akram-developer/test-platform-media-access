'use client';

import { Button } from '@/components/ui/button';
import { Eye, Search, Filter } from 'lucide-react';

export default function AdminOrdersPage() {
    const orders = [
        { id: 'ord_123', user: 'John Doe', plan: '12 Months Access', amount: '$69.99', status: 'COMPLETED', date: '2024-01-10' },
        { id: 'ord_456', user: 'Alice Smith', plan: '6 Months Access', amount: '$39.99', status: 'COMPLETED', date: '2024-01-11' },
        { id: 'ord_789', user: 'Bob Wilson', plan: '1 Month Access', amount: '$9.99', status: 'PENDING', date: '2024-01-12' },
        { id: 'ord_000', user: 'New User', plan: '12 Months Access', amount: '$69.99', status: 'FAILED', date: '2024-01-12' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-white">Orders & Payments</h1>
                <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search order ID..."
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <Button variant="outline" size="icon" className="border-slate-800 text-gray-400">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-slate-900 text-gray-200 uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">User</th>
                                <th className="px-6 py-4">Plan</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-gray-500">{order.id}</td>
                                    <td className="px-6 py-4 font-medium text-white">{order.user}</td>
                                    <td className="px-6 py-4 text-blue-300">{order.plan}</td>
                                    <td className="px-6 py-4 font-mono">${order.amount.replace('$', '')}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${order.status === 'COMPLETED' ? 'bg-green-900/30 text-green-400' :
                                                order.status === 'PENDING' ? 'bg-yellow-900/30 text-yellow-400' :
                                                    'bg-red-900/30 text-red-400'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{order.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-400 hover:text-white hover:bg-blue-900/20">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
