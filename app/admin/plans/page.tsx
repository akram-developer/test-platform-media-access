'use client';

import { PLANS } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Edit, Plus, Trash } from 'lucide-react';

export default function AdminPlansPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Subscriptions Plans</h1>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" /> Add Plan
                </Button>
            </div>

            <div className="bg-slate-950 rounded-xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-slate-900 text-gray-200 uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Duration</th>
                                <th className="px-6 py-4">Popular</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {PLANS.map((plan) => (
                                <tr key={plan.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">{plan.name}</td>
                                    <td className="px-6 py-4 font-mono text-blue-400">${plan.price}</td>
                                    <td className="px-6 py-4">{plan.duration}</td>
                                    <td className="px-6 py-4">
                                        {plan.popular ? (
                                            <span className="px-2 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold">Yes</span>
                                        ) : (
                                            <span className="text-gray-600">-</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-900/20">
                                            <Trash className="h-4 w-4" />
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
