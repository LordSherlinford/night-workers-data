import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';

export default function WorkIntensityChart() {
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
      borderColor: 'rgba(233, 69, 96, 0.3)',
      textStyle: { color: '#fff' },
    },
    legend: {
      data: ['夜间从业者', '白班从业者'],
      textStyle: { color: '#ccc' },
      top: 0,
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '5%',
      top: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['日均工时(h)', '周工作天数', '月休息天数', '连续工作4h+占比(%)'],
      axisLabel: { color: '#ccc', fontSize: 11 },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#888' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
    },
    series: [
      {
        name: '夜间从业者',
        type: 'bar',
        data: [10.5, 6.3, 3.8, 72],
        barWidth: '30%',
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              { offset: 0, color: '#e94560' },
              { offset: 1, color: '#ff6b8a' },
            ],
          },
        },
        animationDuration: 1500,
      },
      {
        name: '白班从业者',
        type: 'bar',
        data: [8, 5, 8, 30],
        barWidth: '30%',
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
        animationDuration: 1500,
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
      <h3 className="text-lg font-semibold text-white mb-4">夜间与白班从业者工作强度对比</h3>
      <div style={{ height: '320px' }}>
        {isVisible && <ReactECharts option={option} style={{ height: '100%' }} />}
      </div>
    </div>
  );
}
