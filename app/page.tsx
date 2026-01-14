'use client';

import { Hero } from '@/components/landing/Hero';
import { TrustSection } from '@/components/landing/TrustSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Pricing } from '@/components/landing/Pricing';
import { FAQ } from '@/components/landing/FAQ';
import { Compliance } from '@/components/landing/Compliance';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">

      <Hero />

      <TrustSection />

      <HowItWorks />

      <Pricing />

      <FAQ />

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-900 to-purple-900 opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied users who have unlocked their media experience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-bold h-14 px-10 text-lg shadow-xl hover:scale-105 transition-transform">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Compliance />

    </div>
  );
}
