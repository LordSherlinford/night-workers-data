import { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  value: number;
  unit?: string;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'purple';
}

export default function StatCard({
  value,
  unit = '',
  label,
  suffix = '',
  prefix = '',
  color = 'primary',
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const colorConfig = {
    primary: {
      bg: 'from-[#e94560]/10 to-[#c73e54]/5',
      border: 'border-[#e94560]/20',
      text: 'text-[#e94560]',
      glow: 'shadow-[0_0_40px_rgba(233,69,96,0.15)]',
      bar: 'from-[#e94560] to-[#ff6b8a]',
    },
    secondary: {
      bg: 'from-[#00d4ff]/10 to-[#00a8cc]/5',
      border: 'border-[#00d4ff]/20',
      text: 'text-[#00d4ff]',
      glow: 'shadow-[0_0_40px_rgba(0,212,255,0.15)]',
      bar: 'from-[#00d4ff] to-[#66e0ff]',
    },
    accent: {
      bg: 'from-[#ffd700]/10 to-[#ffb700]/5',
      border: 'border-[#ffd700]/20',
      text: 'text-[#ffd700]',
      glow: 'shadow-[0_0_40px_rgba(255,215,0,0.15)]',
      bar: 'from-[#ffd700] to-[#ffed4e]',
    },
    purple: {
      bg: 'from-[#9966ff]/10 to-[#7a3ff0]/5',
      border: 'border-[#9966ff]/20',
      text: 'text-[#9966ff]',
      glow: 'shadow-[0_0_40px_rgba(153,102,255,0.15)]',
      bar: 'from-[#9966ff] to-[#c299ff]',
    },
  };

  const config = colorConfig[color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateValue();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, value]);

  const animateValue = () => {
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const formatValue = (val: number) => {
    if (value >= 10000) {
      return (val / 10000).toFixed(0);
    }
    if (Number.isInteger(value)) {
      return Math.round(val).toString();
    }
    return val.toFixed(1);
  };

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl bg-gradient-to-br ${config.bg} ${config.border} border backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${config.glow} overflow-hidden`}
    >
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.bar} opacity-50`} />

      {/* Corner decorations */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${config.border} rounded-tl-2xl`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${config.border} rounded-br-2xl`} />

      {/* Background glow */}
      <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${config.bar} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className={`text-4xl md:text-5xl font-bold mb-3 ${config.text} tracking-tight`}>
          {prefix}
          {formatValue(displayValue)}
          <span className="text-xl md:text-2xl font-semibold ml-1 opacity-90">{unit}</span>
          {suffix && <span className="text-base md:text-lg ml-1 opacity-70">{suffix}</span>}
        </div>
        <div className="text-gray-400 text-sm md:text-base font-medium">{label}</div>

        {/* Bottom progress bar */}
        <div className="mt-4 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${config.bar} rounded-full transition-all duration-1000`}
            style={{
              width: isVisible ? `${Math.min((value / (value * 1.2)) * 100, 85)}%` : '0%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
