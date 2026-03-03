'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: '/media/char/2.%20showcase%20chat%20(chat%20list).png',
    title: 'Personality-Driven AI Interactions',
    body: 'Experience character conversations shaped by style, tone, and scene context for believable fan-made roleplay.'
  },
  {
    image: '/media/char/3.%20showcase%20chat%20(chatscreen).png',
    title: 'Immersive Conversation Flow',
    body: 'Switch between quick exchanges and story-rich dialogue moments while maintaining a clean chat-native UI.'
  },
  {
    image: '/media/char/4.%20showcase%20manual%20chat%20(chatlist%20and%20chat%20screen).webp',
    title: 'Manual Creator Mode',
    body: 'Build your own custom dialogues and scenarios, then test interactions exactly how you imagine them.'
  }
];

export default function CharacterShowcase() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.showcase-row').forEach((row) => {
        const text = row.querySelector('.showcase-text');
        const image = row.querySelector('.showcase-image');

        if (text && image) {
          gsap.from(text, {
            x: -50,
            opacity: 0,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 78%' }
          });

          gsap.from(image, {
            x: 70,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 78%' }
          });

          gsap.to(image, {
            yPercent: -6,
            ease: 'none',
            scrollTrigger: {
              trigger: row,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          });
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white">
      <div className="section-shell space-y-16">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900">Character Showcase</h2>
          <p className="text-slate-600">
            Designed for expressive fan conversations with AI-assisted replies, custom dialogue
            authoring, and consistent character presentation.
          </p>
        </div>

        {cards.map((item, index) => (
          <article key={item.title} className="showcase-row grid items-center gap-8 md:grid-cols-2">
            <div className={`showcase-image ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={760}
                  height={460}
                  className="h-auto w-full rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="showcase-text space-y-3">
              <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
