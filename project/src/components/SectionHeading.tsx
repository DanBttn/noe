import type { ReactNode } from 'react';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
}

const SectionHeading = ({ index, eyebrow, title, intro, align = 'center', tone = 'light' }: SectionHeadingProps) => {
  const centered = align === 'center';
  const onDark = tone === 'light';

  return (
    <div className={centered ? 'text-center' : ''}>
      <p
        data-anim="fade-up"
        className={`text-xs sm:text-sm uppercase tracking-[0.3em] ${onDark ? 'text-cream/60' : 'text-wine'}`}
      >
        <span className={onDark ? 'text-cream' : 'text-moss'}>{index}</span> — {eyebrow}
      </p>
      <h2
        data-anim="title"
        className={`mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight ${onDark ? 'text-cream' : 'text-moss'}`}
      >
        {title}
      </h2>
      <div data-anim="line" className={`mt-6 h-px w-16 bg-wine ${centered ? 'mx-auto' : ''}`}></div>
      {intro && (
        <p
          data-anim="fade-up"
          className={`mt-6 text-base sm:text-lg font-light leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${
            onDark ? 'text-cream/80' : 'text-moss/80'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
