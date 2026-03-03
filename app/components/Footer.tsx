import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-600 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/media/icon.jpg" alt="BlueTalk logo" width={28} height={28} className="rounded-md" />
          <span>BlueTalk Fan Project</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com" className="hover:text-slate-900">
            GitHub
          </a>
          <a href="#disclaimer" className="hover:text-slate-900">
            Disclaimer
          </a>
        </div>
        <p>© {new Date().getFullYear()} BlueTalk. Unofficial fan-made experience.</p>
      </div>
    </footer>
  );
}
