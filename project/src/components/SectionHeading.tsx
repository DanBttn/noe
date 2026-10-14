import type { ReactNode } from 'react';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  align?: 'center' | 'left';
}

const SectionHeading = ({ index, eyebrow, title, intro, align = 'center' }: SectionHeadingProps) => {
  const centered = align === 'center';

  return (
    <div className={centered ? 'text-center' : ''}>
      <p
        data-anim="fade-up"
        className="text-xs sm:text-sm uppercase tracking-[0.3em]"
      >
        <span>{index}</span> — {eyebrow}
      </p>
      <h2
        data-anim="title"
        className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight"
      >
        {title}
      </h2>
      <div data-anim="line" className={`mt-6 h-px w-16 ${centered ? 'mx-auto' : ''}`}></div>
      {intro && (
        <p
          data-anim="fade-up"
          className={`mt-6 text-base sm:text-lg font-light leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
