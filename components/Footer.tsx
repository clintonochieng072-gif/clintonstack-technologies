export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-white">ClintonStack Technologies</h4>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">Premium software, automation and digital experiences for companies that want to move faster and scale with confidence.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Contact</h5>
            <p className="mt-3 text-sm text-slate-300">Phone: <a href="tel:+254768524480" className="text-cyan-300">0768524480</a></p>
            <p className="mt-2 text-sm text-slate-300">Email: <a href="mailto:hello@clintonstack.com" className="text-cyan-300">hello@clintonstack.com</a></p>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Focus Areas</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Product design and engineering</li>
              <li>AI-driven workflow automation</li>
              <li>High-converting marketing websites</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} ClintonStack Technologies</div>
      </div>
    </footer>
  );
}
