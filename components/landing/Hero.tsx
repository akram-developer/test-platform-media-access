import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";

export function Hero() {
    return (
        <section className="relative py-24 lg:py-40 overflow-hidden bg-background">
            {/* Background gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full opacity-50"></div>
                <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full opacity-40"></div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <Badge variant="secondary" className="mb-8 px-4 py-1.5 text-sm bg-blue-900/30 text-blue-400 border-blue-500/30 hover:bg-blue-900/40">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    New: Instant Activation System
                </Badge>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl">
                    Secure & Instant <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                        Media Player Activation
                    </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    Get your official activation code for your media player in seconds. 100% secure payment for device access authorization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/pricing" className="w-full sm:w-auto">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-blue-900/20">
                            View Plans <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/how-it-works" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 w-full sm:w-auto h-12 px-8 text-base">
                            How it works
                        </Button>
                    </Link>
                </div>

                {/* Social Proof / Trust Line */}
                <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-slate-800 flex items-center justify-center text-xs overflow-hidden relative">
                                <Image
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="User"
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span>Trusted by 5,000+ users</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
