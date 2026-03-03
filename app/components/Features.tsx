'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'AI Chat Simulation',
    description: 'Dynamic chat responses inspired by character style and context-aware prompts.'
  },
  {
    title: 'Manual Dialogue Creator',
    description: 'Craft custom conversation scenes and fine-tune messages for fan storytelling.'
  },
  {
    title: 'Stories / Status System',
    description: 'Build narrative continuity through story feeds and episodic status updates.'
  },
  {
    title: 'Channel Broadcast System',
    description: 'Share announcements and in-world updates using channel-based broadcast flows.'
  }
];

const icon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-blueTalk-700" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Features() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.feature-grid',
          start: 'top 80%'
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white">
      <div className="section-shell space-y-10">
        <h2 className="text-3xl font-semibold text-slate-900">Core Features</h2>
        <div className="feature-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
              <div className="mb-4 inline-flex rounded-full bg-white p-2">{icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
