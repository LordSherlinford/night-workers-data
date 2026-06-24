import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { cityDensityData } from '@/data/nightWorkersData';

export default function CityRankChart() {
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
      trigger: 'axis',
      backgroundColor: 'rgba(22, 33, 62, 0.95)',
      borderColor: 'rgba(255, 215, 0, 0.3)',
      textStyle: { color: '#fff' },
      formatter: '{b}: {c} 人/平方公里',
    },
    grid: {
      left: '3%',
      right: '10%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLabel: { color: '#888' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
    },
    yAxis: {
      type: 'category',
      data: cityDensityData.map((item) => item.name).reverse(),
      axisLabel: { color: '#ccc', fontSize: 13 },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        type: 'bar',
        data: cityDensityData.map((item) => item.density).reverse(),
        barWidth: '55%',
        itemStyle: {
          borderRadius: [0, 6, 6, 0],
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              { offset: 0, color: '#ffd700' },
              { offset: 1, color: '#ff8c00' },
            ],
          },
        },
        label: {
          show: true,
          position: 'right',
          color: '#ffd700',
          fontSize: 12,
          fontWeight: 'bold',
          formatter: '{c}',
        },
        animationDuration: 1500,
        animationEasing: 'cubicOut',
      },
    ],
  };

  return (
    <div
      ref={ref}
      className={`bg-[#16213e]/60 backdrop-blur-sm rounded-2xl border border-[#ffd700]/10 p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-lg font-semibold text-white mb-4">
        城市夜间劳动者密度排名（人/平方公里）
      </h3>
      <div style={{ height: '380px' }}>
        {isVisible && <ReactECharts option={option} style={{ height: '100%' }} />}
      </div>
    </div>
  );
}
