import Link from 'next/link';

const links = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#main" className="skip-link">Skip to content</a>
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">ClintonStack</Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
          <a href="tel:+254768524480" className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20">
            Call 0768524480
          </a>
        </nav>
      </div>
    </header>
  );
}
