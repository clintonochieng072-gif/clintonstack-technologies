import { ReactNode } from 'react';

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionShell({ id, eyebrow, title, description, children, align = 'left', className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`relative px-6 py-24 sm:px-8 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">{eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-8 text-slate-400">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
