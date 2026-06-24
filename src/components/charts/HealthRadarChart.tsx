import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { healthData } from '@/data/nightWorkersData';

export default function HealthRadarChart() {
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
      backgroundColor: 'rgba(22, 33, 62, 0.95)',
      borderColor: 'rgba(233, 69, 96, 0.3)',
      textStyle: { color: '#fff' },
    },
    legend: {
      data: ['夜间从业者', '白班从业者'],
      textStyle: { color: '#ccc' },
      bottom: 0,
    },
    radar: {
      indicator: healthData.map((item) => ({
        name: item.name,
        max: 80,
      })),
      axisName: {
        color: '#ccc',
        fontSize: 12,
      },
      splitLine: {
        lineStyle: { color: 'rgba(255,255,255,0.1)' },
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(233, 69, 96, 0.02)', 'rgba(233, 69, 96, 0.05)'],
        },
      },
      axisLine: {
        lineStyle: { color: 'rgba(255,255,255,0.1)' },
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: healthData.map((item) => item.value),
            name: '夜间从业者',
            areaStyle: {
              color: 'rgba(233, 69, 96, 0.3)',
            },
            lineStyle: {
              color: '#e94560',
              width: 2,
            },
            itemStyle: {
              color: '#e94560',
            },
          },
          {
            value: [25, 20, 18, 15, 22],
            name: '白班从业者',
            areaStyle: {
              color: 'rgba(0, 212, 255, 0.2)',
            },
            lineStyle: {
              color: '#00d4ff',
              width: 2,
            },
            itemStyle: {
              color: '#00d4ff',
            },
          },
        ],
        animationDuration: 2000,
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
      <h3 className="text-lg font-semibold text-white mb-4">
        夜间与白班从业者健康风险对比（患病率%）
      </h3>
      <div style={{ height: '350px' }}>
        {isVisible && <ReactECharts option={option} style={{ height: '100%' }} />}
      </div>
    </div>
  );
}
