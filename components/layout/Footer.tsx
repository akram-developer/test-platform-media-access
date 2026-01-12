import Link from 'next/link';
import { MonitorPlay } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 mt-auto">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <MonitorPlay className="h-8 w-8 text-blue-600" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MediaAccess</span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">
                            Premium media activation services for your favorite players. Instant delivery, secure payments.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/how-it-works" className="hover:underline">How it Works</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/pricing" className="hover:underline">Pricing</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/faq" className="hover:underline">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/legal/privacy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/legal/terms" className="hover:underline">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contact</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/dashboard/support" className="hover:underline">Support Ticket</Link>
                                </li>
                                <li>
                                    <a href="mailto:support@media-access.one" className="hover:underline">Email Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2026 MediaAccess™. All Rights Reserved.</span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
                        {/* Social Icons could go here */}
                    </div>
                </div>

                {/* COMPLIANCE DISCLAIMER */}
                <div className="mt-8 p-4 bg-slate-900 border border-slate-800 rounded-lg text-xs text-gray-500 text-center">
                    <p className="font-bold text-gray-400 mb-1">LEGAL DISCLAIMER</p>
                    <p>
                        This service provides only activation for a media player. We do not host, sell, or distribute any TV channels, movies, or media content.
                        Users are responsible for the content they use and must own the required rights.
                    </p>
                </div>
            </div>
        </footer>
    );
}
