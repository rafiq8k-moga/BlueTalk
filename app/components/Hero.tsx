'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', {
        y: 26,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power2.out'
      });

      gsap.from('.hero-art', {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.to('.hero-art', {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="section-shell grid min-h-screen items-center gap-10 pt-24 md:grid-cols-2">
        <div className="hero-copy space-y-5">
          <Image src="/media/icon.jpg" alt="BlueTalk logo" width={64} height={64} className="rounded-xl" priority />
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">BlueTalk</h1>
          <h2 className="text-xl font-medium text-blueTalk-700">AI Character Messaging Experience</h2>
          <p className="max-w-md text-slate-600">
            A fan-made messaging simulator inspired by character-driven storytelling. Chat, craft
            dialogues, and explore stories in a clean mobile-style flow.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#download"
              aria-label="Download BlueTalk"
              className="rounded-full bg-blueTalk-500 px-6 py-3 font-medium text-white transition hover:bg-blueTalk-700"
            >
              Download
            </a>
            <a
              href="#screenshots"
              aria-label="View app screenshots"
              className="rounded-full border border-blue-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-blue-50"
            >
              View Screenshots
            </a>
          </div>
        </div>
        <div className="hero-art justify-self-center">
          <Image
            src="/media/char/1.%20hero%20image.webp"
            alt="BlueTalk hero character"
            width={620}
            height={780}
            priority
            className="h-auto w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
