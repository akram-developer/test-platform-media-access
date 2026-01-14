'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

const FAQS = [
    {
        question: "How long does activation take?",
        answer: "Activation is instant! As soon as your payment is confirmed, our system automatically generates your unique access code and sends it to your email. You can also view it in your dashboard immediately."
    },
    {
        question: "Will this work on my device?",
        answer: "Yes, our activation codes are compatible with most standard media player applications on Smart TVs (Samsung, LG, Android TV), Firestick, Apple TV, and MAG devices. Please check your specific player's documentation."
    },
    {
        question: "Do you offer refunds?",
        answer: "We offer a 7-day money-back guarantee if the activation code does not work on your compatible device. Please contact our technical support team first to authorize any returns."
    },
    {
        question: "What exactly am I buying?",
        answer: "You are purchasing a software activation license (access code) for a media player application. We do NOT provide any playlists, channels, or media content. You must provide your own content."
    },
    {
        question: "Can I use it on multiple devices?",
        answer: "Each activation code is valid for one specific device identifier (MAC address). If you have multiple devices, you will need a separate activation code for each one."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-950">
            <div className="max-w-3xl mx-auto px-4">
                <SectionHeader
                    title="Frequently Asked Questions"
                    subtitle="Have questions? We're here to help."
                />

                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="border border-white/10 rounded-xl bg-slate-900/40 overflow-hidden transition-all duration-200 hover:border-blue-500/30">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {openIndex === idx ? (
                                    <Minus className="h-5 w-5 text-blue-400 shrink-0 ml-4" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-500 shrink-0 ml-4" />
                                )}
                            </button>

                            <div className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden px-6">
                                    <p className="text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
