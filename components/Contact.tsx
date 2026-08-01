import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <section id="contact" className="bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_40%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] px-6 py-24 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Let’s build something exceptional</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">A premium digital presence starts with a smart conversation.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Tell us about your company, your goals and the experience you want to create. We’ll shape a clear plan that balances design, product and growth.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+254768524480" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">Call now <ArrowRight className="h-4 w-4" /></a>
              <a href="https://wa.me/254768524480" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </div>
          <form className="rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-6" aria-label="Contact form">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Your name" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Work email" />
              <textarea rows={4} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Tell us about your project" />
              <button className="rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">Send inquiry</button>
            </div>
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
}
