'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const shots = [
  '1. First Looking.jpg',
  '2. Chat Tab.jpg',
  '3. Create Dialogue.jpg',
  '4. ChatScreen.jpg',
  '5. Manual Chat Tab.jpg',
  '6. Manual Chat Screen.jpg',
  '7. Stories List.jpg',
  '8. Stories Detail.jpg'
];

export default function Screenshots() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.shot-item', {
        x: -60,
        opacity: 0,
        scale: 0.96,
        duration: 0.95,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.shots-grid',
          start: 'top 75%'
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="screenshots" ref={ref} className="bg-blue-50/70">
      <div className="section-shell space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900">App Screenshots</h2>
          <p className="text-slate-600">
            Preview major screens including chat, manual dialogue tools, and story features.
          </p>
        </div>

        <div className="shots-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shots.map((name) => (
            <div key={name} className="shot-item">
              <div className="mobile-frame">
                <Image
                  src={`/media/screenshot/${name}`}
                  alt={`BlueTalk screenshot: ${name.replace('.jpg', '')}`}
                  width={360}
                  height={760}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
