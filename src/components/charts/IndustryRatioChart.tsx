import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { industryRatioData } from '@/data/nightWorkersData';

export default function IndustryRatioChart() {
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
      borderColor: 'rgba(0, 212, 255, 0.3)',
      textStyle: { color: '#fff' },
      formatter: '{b}: {c}%',
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '10%',
      top: '8%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: industryRatioData.map((item) => item.name),
      axisLabel: {
        color: '#ccc',
        fontSize: 11,
        rotate: 20,
        interval: 0,
      },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#888', formatter: '{value}%' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
      max: 80,
    },
    series: [
      {
        type: 'bar',
        data: industryRatioData.map((item) => item.ratio),
        barWidth: '50%',
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              { offset: 0, color: '#00d4ff' },
              { offset: 1, color: '#00a8cc' },
            ],
          },
        },
        label: {
          show: true,
          position: 'top',
          color: '#00d4ff',
          fontSize: 12,
          formatter: '{c}%',
        },
        animationDuration: 1500,
        animationEasing: 'cubicOut',
      },
    ],
  };

  return (
    <div
      ref={ref}
      className={`bg-[#16213e]/60 backdrop-blur-sm rounded-2xl border border-[#00d4ff]/10 p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-lg font-semibold text-white mb-4">七大行业夜间从业者占比</h3>
      <div style={{ height: '320px' }}>
        {isVisible && <ReactECharts option={option} style={{ height: '100%' }} />}
      </div>
    </div>
  );
}
