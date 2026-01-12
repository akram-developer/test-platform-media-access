'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, MonitorPlay, ShoppingBag, User, LogOut, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navigation = [
        { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
        { name: 'My Access', href: '/dashboard/access', icon: MonitorPlay },
        { name: 'Purchase', href: '/pricing', icon: ShoppingBag },
        { name: 'Support', href: '/dashboard/support', icon: Ticket },
        { name: 'Profile', href: '/dashboard/profile', icon: User },
    ];

    return (
        <div className="flex min-h-[calc(100vh-64px)]">
            {/* Sidebar */}
            <aside className="w-64 hidden md:flex flex-col bg-slate-950 border-r border-white/10 p-4">
                <div className="mb-8 px-2 pt-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Menu</span>
                </div>
                <nav className="space-y-1 flex-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                                    isActive
                                        ? 'bg-blue-600/10 text-blue-500'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                )}
                            >
                                <item.icon className="mr-3 h-5 w-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                <div className="mt-auto border-t border-white/10 pt-4">
                    <Link href="/login">
                        <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/10">
                            <LogOut className="mr-3 h-5 w-5" />
                            Sign Out
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-slate-900 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
