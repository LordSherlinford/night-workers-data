import { useEffect, useRef, useState } from 'react';

interface SectionTitleProps {
  chapter: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionTitle({ chapter, title, subtitle, align = 'center' }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-16 transition-all duration-700 ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className={`inline-block mb-5 ${align === 'center' ? 'mx-auto' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#e94560]" />
          <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e94560]/15 to-[#00d4ff]/15 border border-[#e94560]/25">
            <span className="text-sm text-[#e94560] font-medium tracking-wider">{chapter}</span>
          </div>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#00d4ff]" />
        </div>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}

      <div className={`mt-8 ${align === 'center' ? 'mx-auto' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#e94560] shadow-lg shadow-[#e94560]/50" />
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#e94560] via-[#ffd700] to-[#00d4ff] rounded-full" />
          <div className="w-3 h-3 rounded-full bg-[#00d4ff] shadow-lg shadow-[#00d4ff]/50" />
        </div>
      </div>
    </div>
  );
}
