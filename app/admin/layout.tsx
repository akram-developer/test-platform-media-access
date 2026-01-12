'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, CreditCard, ShoppingCart, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Users', href: '/admin/users', icon: Users },
        { name: 'Plans', href: '/admin/plans', icon: CreditCard },
        { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="flex min-h-[calc(100vh-64px)]">
            {/* Admin Sidebar */}
            <aside className="w-64 hidden md:flex flex-col bg-slate-950 border-r border-red-900/20 p-4">
                <div className="mb-8 px-2 pt-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Admin Panel</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-900/30 text-red-400">v1.0</span>
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
                                        ? 'bg-red-900/10 text-red-500'
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
                        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
                            <LogOut className="mr-3 h-5 w-5" />
                            Exit Admin
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-slate-900 p-8 overflow-y-auto">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">Administration</h2>
                    <div className="flex items-center space-x-4">
                        <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                            AD
                        </div>
                    </div>
                </div>
                {children}
            </main>
        </div>
    );
}
