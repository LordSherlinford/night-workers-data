import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { growthData } from '@/data/nightWorkersData';

export default function GrowthLineChart() {
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
      formatter: '{b}年: {c} 万人',
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: growthData.map((item) => item.year),
      axisLabel: { color: '#ccc' },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
      axisTick: { show: false },
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#888', formatter: '{value} 万' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
    },
    series: [
      {
        type: 'line',
        data: growthData.map((item) => item.value),
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 3,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              { offset: 0, color: '#e94560' },
              { offset: 1, color: '#00d4ff' },
            ],
          },
        },
        itemStyle: {
          color: '#fff',
          borderColor: '#e94560',
          borderWidth: 2,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(233, 69, 96, 0.4)' },
              { offset: 1, color: 'rgba(233, 69, 96, 0.05)' },
            ],
          },
        },
        animationDuration: 2000,
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
      <h3 className="text-lg font-semibold text-white mb-4">
        2019-2025 年夜间劳动者群体规模增长趋势（万人）
      </h3>
      <div style={{ height: '320px' }}>
        {isVisible && <ReactECharts option={option} style={{ height: '100%' }} />}
      </div>
    </div>
  );
}
