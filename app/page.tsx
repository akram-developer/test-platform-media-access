'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PLANS } from '@/lib/mockData';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 blur-3xl rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Unlock the Full Potential of Your <br />
            <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Media Player
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get instant activation for your favorite media players. Secure payments, 24/7 support, and guaranteed stability without the hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                View Plans <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 w-full sm:w-auto">
                How it Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="h-12 w-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Activation</h3>
              <p className="text-gray-400">
                No waiting times. Your access code is generated and delivered immediately after payment confirmation.
              </p>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure & Legal</h3>
              <p className="text-gray-400">
                We provide legitimate player activations. We do not host or sell any content, ensuring a compliant service.
              </p>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="h-12 w-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Universal Support</h3>
              <p className="text-gray-400">
                Compatible with all major media players (IBO Player, Smart STB, Duplex, etc.) and devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 mb-12">Choose the activation period that suits you best.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <div key={plan.id} className={`relative p-8 rounded-2xl border ${plan.popular ? 'bg-slate-900/80 border-blue-500 ring-2 ring-blue-500/20' : 'bg-slate-950 border-white/10'} flex flex-col`}>
                {plan.popular && (
                  <span className="absolute top-0 right-0 -mt-3 mr-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center my-4">
                  <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/ {plan.duration}</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>
                <ul className="text-left space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="mt-auto">
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-800 hover:bg-slate-700'}`}>
                    Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Activate?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied users who have unlocked their media experience.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8">
              Create Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
