import { promises as fs } from 'node:fs';
import path from 'node:path';
import CharacterShowcase from './components/CharacterShowcase';
import Download from './components/Download';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Screenshots from './components/Screenshots';

function renderMarkdown(content: string) {
  const lines = content.split('\n');

  return lines.map((line, index) => {
    if (line.startsWith('# ')) {
      return (
        <h3 key={index} className="mt-4 text-lg font-semibold text-slate-900">
          {line.replace('# ', '')}
        </h3>
      );
    }

    if (line.startsWith('- ')) {
      return (
        <li key={index} className="ml-6 list-disc text-sm leading-relaxed text-slate-700">
          {line.replace('- ', '')}
        </li>
      );
    }

    if (!line.trim()) {
      return <div key={index} className="h-2" />;
    }

    return (
      <p key={index} className="text-sm leading-relaxed text-slate-700">
        {line}
      </p>
    );
  });
}

export default async function HomePage() {
  const disclaimerPath = path.join(process.cwd(), 'disclaimer.md');
  const disclaimerContent = await fs.readFile(disclaimerPath, 'utf8');

  return (
    <main>
      <Hero />
      <CharacterShowcase />
      <Screenshots />
      <Features />

      <section id="disclaimer" className="bg-blue-100/60">
        <div className="section-shell max-w-4xl space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Fan Project Disclaimer</h2>
          <p className="text-sm text-slate-700">
            BlueTalk is a fan-made experience and is not affiliated with, endorsed by, or
            representing official Blue Archive channels.
          </p>
          <div className="space-y-1 rounded-2xl border border-blue-200 bg-white/80 p-6">
            {renderMarkdown(disclaimerContent)}
          </div>
        </div>
      </section>

      <Download />
      <Footer />
    </main>
  );
}
