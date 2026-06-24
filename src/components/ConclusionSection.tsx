import { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Users, Sparkles } from 'lucide-react';

export default function ConclusionSection() {
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
    <section
      ref={ref}
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#e94560]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffd700]/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#e94560]/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#ffd700]/5 rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#e94560]" />
            <Sparkles className="w-5 h-5 text-[#ffd700]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#00d4ff]" />
          </div>

          <div className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e94560]/20 to-[#ffd700]/20 border border-[#e94560]/30 mb-8">
            <span className="text-[#ffd700] text-sm font-medium tracking-wider">致敬夜色里的劳动者</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            每一份深夜里的劳动
            <br />
            <span className="bg-gradient-to-r from-[#e94560] via-[#ffd700] to-[#00d4ff] bg-clip-text text-transparent">
              都值得被尊重与善待
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-20 max-w-2xl mx-auto">
            在此呼吁：持续关注夜间劳动者的健康与权益，加快完善相关保障制度，
            压实企业主体责任，让深夜的每一份付出，都能收获对等的回报与温暖。
          </p>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="group bg-[#16213e]/60 backdrop-blur-sm rounded-2xl border border-[#e94560]/20 p-10 hover:border-[#e94560]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e94560]/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#e94560]/20 to-transparent rounded-full blur-2xl group-hover:from-[#e94560]/30 transition-all duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e94560]/20 to-[#c73e54]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-8 h-8 text-[#e94560]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">关注健康</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                关注夜间劳动者的身心健康，提供必要的健康保障与职业防护
              </p>
            </div>

            <div className="group bg-[#16213e]/60 backdrop-blur-sm rounded-2xl border border-[#00d4ff]/20 p-10 hover:border-[#00d4ff]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00d4ff]/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#00d4ff]/20 to-transparent rounded-full blur-2xl group-hover:from-[#00d4ff]/30 transition-all duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#00a8cc]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-8 h-8 text-[#00d4ff]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">完善制度</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                加快完善夜间劳动保障制度，规范夜班补贴与休息休假制度
              </p>
            </div>

            <div className="group bg-[#16213e]/60 backdrop-blur-sm rounded-2xl border border-[#ffd700]/20 p-10 hover:border-[#ffd700]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ffd700]/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-full blur-2xl group-hover:from-[#ffd700]/30 transition-all duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffd700]/20 to-[#ffb700]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-8 h-8 text-[#ffd700]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">企业责任</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                压实企业主体责任，保障新就业形态劳动者的合法权益
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#e94560]/20 via-[#ffd700]/20 to-[#00d4ff]/20 rounded-full blur-xl" />
              <p className="relative text-2xl md:text-4xl font-bold text-white mb-4">
                让每一份付出，都有温暖的回响
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#e94560]/50" />
              <Heart className="w-4 h-4 text-[#e94560] animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#00d4ff]/50" />
            </div>
            <p className="text-gray-500 text-sm mt-6">
              数据来源：国家部委、头部平台及第三方机构 2025 年调研数据
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
