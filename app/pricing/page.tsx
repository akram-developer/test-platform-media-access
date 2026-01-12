'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, MonitorPlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PLANS } from '@/lib/mockData';

export default function PricingPage() {
    return (
        <div className="py-20 max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white mb-4">Choose Your Activation Plan</h1>
                <p className="text-xl text-gray-400">Select the duration that fits your needs. Instant delivery guaranteed.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {PLANS.map((plan) => (
                    <div key={plan.id} className={`relative p-8 rounded-2xl border ${plan.popular ? 'bg-slate-900 border-blue-500 ring-2 ring-blue-500/20' : 'bg-slate-950 border-white/10'} flex flex-col hover:border-blue-500/50 transition-colors`}>
                        {plan.popular && (
                            <span className="absolute top-0 right-0 -mt-3 mr-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Best Value
                            </span>
                        )}
                        <div className="mb-4">
                            <MonitorPlay className={`h-10 w-10 ${plan.popular ? 'text-blue-500' : 'text-gray-500'}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline my-4">
                            <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                            <span className="text-gray-500 ml-2">/ {plan.duration}</span>
                        </div>
                        <p className="text-gray-400 mb-8 border-b border-gray-800 pb-6">{plan.description}</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-300">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/login?redirect=/checkout">
                            <Button size="lg" className={`w-full font-bold text-base py-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-800 hover:bg-slate-700'}`}>
                                Get Started
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need help choosing?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Our support team is available 24/7 to answer your questions about device compatibility and activation process.
                </p>
                <Link href="/contact">
                    <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        Contact Support
                    </Button>
                </Link>
            </div>
        </div>
    );
}
