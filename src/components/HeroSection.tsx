import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#e94560]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#00d4ff]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ffd700]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#9966ff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-4 h-4 border border-[#e94560]/30 rounded-full animate-float" style={{ animationDuration: '6s' }} />
        <div className="absolute top-40 right-[15%] w-6 h-6 border border-[#00d4ff]/30 rotate-45 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-[20%] w-3 h-3 bg-[#ffd700]/30 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-[10%] w-8 h-8 border border-[#e94560]/20 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-[25%] w-5 h-5 border border-[#00d4ff]/20 rotate-12 animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }} />
        <div className="absolute top-1/4 left-[5%] w-2 h-2 bg-[#ffd700]/40 rounded-full animate-float" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
      </div>

      {/* Particle Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Horizontal lines decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e94560]/20 to-transparent" />
        <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e94560]/20 to-[#00d4ff]/20 border border-[#e94560]/30 mb-10 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <Sparkles className="w-4 h-4 text-[#ffd700]" />
          <span className="text-[#e94560] text-sm font-medium tracking-wide">
            中国城市夜间劳动者全景调查
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span className="bg-gradient-to-r from-[#e94560] via-[#ffd700] to-[#00d4ff] bg-clip-text text-transparent drop-shadow-lg">
            城市不平
          </span>
          <br />
          <span className="text-white drop-shadow-2xl">穿梭平安</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-14 transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          当白昼的喧嚣缓缓退去，万家灯火点亮城市夜空，多数人结束一天的工作，
          而整座城市依旧有序运转。夜间劳动者是城市里默默无闻的隐形群体，
          他们昼夜颠倒、轮班作息，全力支撑民生服务、公共安全与夜间经济发展。
        </p>

        <div
          className={`flex flex-wrap justify-center gap-8 mb-16 transition-all duration-700 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-[#e94560] mb-1 group-hover:scale-110 transition-transform duration-300">
              1800-2200<span className="text-2xl">万</span>
            </div>
            <div className="text-sm text-gray-500">夜间劳动者规模</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#e94560] to-transparent mx-auto mt-2" />
          </div>
          <div className="w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent hidden md:block" />
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-[#00d4ff] mb-1 group-hover:scale-110 transition-transform duration-300">
              70<span className="text-2xl">%</span>
            </div>
            <div className="text-sm text-gray-500">交通运输与配送占比</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent mx-auto mt-2" />
          </div>
          <div className="w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent hidden md:block" />
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-1 group-hover:scale-110 transition-transform duration-300">
              2.4<span className="text-2xl">倍</span>
            </div>
            <div className="text-sm text-gray-500">七年增长幅度</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#ffd700] to-transparent mx-auto mt-2" />
          </div>
        </div>

        <button
          onClick={() => {
            document.getElementById('section-1')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#e94560] to-[#c73e54] text-white font-medium hover:shadow-2xl hover:shadow-[#e94560]/40 transition-all duration-700 delay-1000 hover:scale-105 active:scale-95 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span>开始探索数据</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-500 tracking-widest uppercase">向下滚动</span>
          <div className="relative w-6 h-10 border-2 border-gray-600 rounded-full">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-2.5 bg-[#e94560] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
