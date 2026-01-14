import { ShieldCheck, Zap, Headphones, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const FEATURES = [
    {
        icon: Zap,
        title: "Instant Delivery",
        desc: "Get your activation code automatically."
    },
    {
        icon: ShieldCheck,
        title: "Secure Payment",
        desc: "Encrypted transactions via reliable gateways."
    },
    {
        icon: Headphones,
        title: "Player Support",
        desc: "Assistance with initializing your device."
    },
    {
        icon: Lock,
        title: "Official Access",
        desc: "Valid authorization for your MAC address."
    }
];

export function TrustSection() {
    return (
        <section className="py-12 border-y border-white/5 bg-slate-950/30">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <Card key={idx} className="bg-transparent border-none shadow-none hover:bg-white/5 transition-colors duration-300">
                            <CardHeader className="flex flex-col items-center text-center pb-2">
                                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-base text-white">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center pt-0">
                                <CardDescription className="text-gray-500 text-sm">{feature.desc}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-6 font-semibold">Compatible with all major players</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Text placeholders for logos since we don't have SVGs */}
                        <span className="text-xl font-bold font-mono text-white">IBO PLAYER</span>
                        <span className="text-xl font-bold font-mono text-white">SMART STB</span>
                        <span className="text-xl font-bold font-mono text-white">DUPLEX PLAY</span>
                        <span className="text-xl font-bold font-mono text-white">NET IPTV</span>
                        <span className="text-xl font-bold font-mono text-white">SET IPTV</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
