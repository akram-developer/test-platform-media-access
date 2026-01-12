'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const links = [
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Refund Policy', href: '/legal/refund' },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
            <aside className="w-full md:w-64 space-y-2">
                <h3 className="font-bold text-white mb-4 px-3">Legal</h3>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "block px-3 py-2 rounded-md transition-colors",
                            pathname === link.href
                                ? "bg-blue-900/20 text-blue-400 font-medium"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
            </aside>
            <div className="flex-1 prose prose-invert max-w-none">
                {children}
            </div>
        </div>
    );
}
