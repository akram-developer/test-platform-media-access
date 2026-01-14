import Link from 'next/link';
import { ArrowRight, CheckCircle, MonitorPlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { PLANS } from '@/lib/mockData';

export default function PricingPage() {
    return (
        <div className="py-20 max-w-screen-xl mx-auto px-4">
            <SectionHeader
                title="Select Your Access Pass"
                subtitle="Secure activation for your media player. Choose the duration that fits your needs."
                className="mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {PLANS.map((plan) => (
                    <Card key={plan.id} className={`relative flex flex-col hover:border-blue-500/50 transition-colors ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20 bg-slate-900' : 'bg-slate-950 border-white/10'}`}>
                        {plan.popular && (
                            <div className="absolute top-0 right-0 -mt-3 mr-4">
                                <Badge className="bg-blue-600 text-white hover:bg-blue-700 uppercase tracking-wide">
                                    Best Value
                                </Badge>
                            </div>
                        )}
                        <CardHeader>
                            <div className="mb-4">
                                <MonitorPlay className={`h-10 w-10 ${plan.popular ? 'text-blue-500' : 'text-gray-500'}`} />
                            </div>
                            <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                            <CardDescription className="text-gray-400 border-b border-gray-800 pb-6 mb-4">{plan.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="flex-1">
                            <div className="flex items-baseline mb-6">
                                <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                                <span className="text-gray-500 ml-2">/ {plan.duration}</span>
                            </div>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-300">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter>
                            <Link href="/login?redirect=/checkout" className="w-full">
                                <Button size="lg" className={`w-full font-bold text-base py-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-800 hover:bg-slate-700'}`}>
                                    Get Started
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center border border-white/5">
                <SectionHeader
                    title="Need help choosing?"
                    subtitle="Our support team is available 24/7 to answer your questions about device compatibility and activation process."
                    className="mb-8"
                />

                <Link href="/contact">
                    <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        Contact Support
                    </Button>
                </Link>
            </div>
        </div>
    );
}
