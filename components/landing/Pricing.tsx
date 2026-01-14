import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { PLANS } from '@/lib/mockData';

export function Pricing() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <SectionHeader
                    title="Simple, Transparent Pricing"
                    subtitle="Choose the activation period that suits you best. All plans include full feature access."
                />

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {PLANS.map((plan) => (
                        <Card
                            key={plan.id}
                            className={`relative flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-white/10 ${plan.popular
                                    ? 'bg-slate-900/80 border-blue-500 shadow-blue-900/20 ring-1 ring-blue-500/20'
                                    : 'bg-slate-950/50 hover:border-white/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <Badge variant="default" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 px-4 py-1">
                                        Best Value
                                    </Badge>
                                </div>
                            )}

                            <CardHeader>
                                <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <div className="mb-8 p-6 rounded-2xl bg-slate-950/50 border border-white/5 text-center">
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-5xl font-extrabold text-white tracking-tight">${plan.price}</span>
                                        <span className="text-gray-500 ml-2 font-medium">/ {plan.duration}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <CheckCircle className="h-5 w-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Link href="/pricing" className="w-full">
                                    <Button
                                        className={`w-full h-12 text-base font-semibold ${plan.popular
                                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20'
                                                : 'bg-white text-slate-900 hover:bg-gray-100'
                                            }`}
                                    >
                                        Choose Plan <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm">
                        Accepted payment methods: Credit Card, Crypto, PayPal (via Reseller)
                    </p>
                </div>
            </div>
        </section>
    );
}
