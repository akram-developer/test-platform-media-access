'use client';

import { Button } from '@/components/ui/button';
import { Plus, MessageSquare } from 'lucide-react';

export default function SupportPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Support Tickets</h1>
                    <p className="text-gray-400">Manage your support requests and inquiries.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" /> New Ticket
                </Button>
            </div>

            {/* Empty State Mock */}
            <div className="bg-slate-950 rounded-xl border border-white/10 p-12 flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center mb-6">
                    <MessageSquare className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Active Tickets</h3>
                <p className="text-gray-400 max-w-md mb-8">
                    You don’t have any open support tickets. If you need help with your activation, feel free to create one.
                </p>
                <Button variant="outline" className="border-gray-700 text-gray-300">
                    View Closed Tickets
                </Button>
            </div>
        </div>
    );
}
