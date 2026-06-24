import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { securityPieData, securityGapData } from '@/data/nightWorkersData';

export default function SecurityPieChart() {
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

  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(22, 33, 62, 0.95)',
      borderColor: 'rgba(233, 69, 96, 0.3)',
      textStyle: { color: '#fff' },
      formatter: '{b}: {c}%',
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
      textStyle: { color: '#ccc' },
      itemGap: 15,
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '75%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 6,
          borderColor: '#16213e',
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          },
        },
        data: securityPieData.map((item, index) => ({
          value: item.value,
          name: item.name,
          itemStyle: {
            color: [
              ['#00cc99', '#33ffcc'],
              ['#ffd700', '#ffed4e'],
              ['#e94560', '#ff6b8a'],
            ][index],
          },
        })),
        animationDuration: 1500,
        animationEasing: 'cubicOut',
      },
    ],
  };

  return (
    <div
      ref={ref}
      className={`bg-[#16213e]/60 backdrop-blur-sm rounded-2xl border border-[#e94560]/10 p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-lg font-semibold text-white mb-4">权益保障缺口分布</h3>
      <div style={{ height: '300px' }}>
        {isVisible && <ReactECharts option={option} style={{ height: '100%' }} />}
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {securityGapData.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${
                  ['#e94560', '#ffd700', '#00d4ff', '#00cc99'][index]
                }, ${['#ff6b8a', '#ffed4e', '#66e0ff', '#33ffcc'][index]})`,
              }}
            />
            <span className="text-sm text-gray-400">
              {item.name}: <span className="text-white font-medium">{item.value}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
