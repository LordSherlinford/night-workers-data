import ScrollProgress from '@/components/ScrollProgress';
import SideNav from '@/components/SideNav';
import BackgroundDecor from '@/components/BackgroundDecor';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import StatCard from '@/components/StatCard';
import IndustryBarChart from '@/components/charts/IndustryBarChart';
import IndustryRatioChart from '@/components/charts/IndustryRatioChart';
import CityRankChart from '@/components/charts/CityRankChart';
import WorkIntensityChart from '@/components/charts/WorkIntensityChart';
import IncomeChart from '@/components/charts/IncomeChart';
import HealthRadarChart from '@/components/charts/HealthRadarChart';
import GrowthLineChart from '@/components/charts/GrowthLineChart';
import SecurityPieChart from '@/components/charts/SecurityPieChart';
import ConclusionSection from '@/components/ConclusionSection';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <SideNav />
      <BackgroundDecor />

      <div className="relative z-10">
        <HeroSection />

        {/* 第一章：全景扫描 */}
        <section id="section-1" className="py-32 px-6 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e94560]/20 to-transparent" />
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              chapter="第一章"
              title="全景扫描：城市夜间劳动者群像"
              subtitle="从群体规模、行业分布、空间分布三大维度，勾勒夜间从业者的全貌"
            />

            {/* 核心数据卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              <StatCard value={1800} unit="万" label="劳动者规模下限" color="primary" />
              <StatCard value={2200} unit="万" label="劳动者规模上限" color="secondary" />
              <StatCard value={70} unit="%" label="交通运输与配送占比" color="accent" suffix="↑" />
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-gray-400 leading-relaxed text-center text-lg">
                伴随夜间经济扩容与平台经济发展，我国城市夜间劳动者已形成庞大队伍。
                综合各部门、行业协会及平台 2025 年数据测算，全国夜间劳动者规模约
                <span className="text-[#e94560] font-semibold"> 1800 万-2200 万人</span>。
                各行业从业人数差距悬殊，其中交通运输与配送行业占比达 70%，是夜间经济的核心支撑。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <IndustryBarChart />
              <IndustryRatioChart />
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <CityRankChart />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-400 leading-relaxed text-center text-lg">
                结合 2025 年中国城市夜经济指数、各地就业统计及从业者密度数据来看，
                全国夜间劳动者呈现<span className="text-[#ffd700] font-semibold">头部城市集聚</span>、
                <span className="text-[#ffd700] font-semibold">区域发展不均</span>的特征。
                城市夜间劳动者的分布密度，与当地经济水平、夜间经济繁荣程度紧密相关。
              </p>
            </div>
          </div>
        </section>

        {/* 第二章：深度剖析 */}
        <section id="section-2" className="py-32 px-6 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f1a]/50 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <SectionTitle
              chapter="第二章"
              title="深度剖析：夜间劳动的现状与困境"
              subtitle="从工作强度、收入补贴、健康权益三个维度，深入剖析夜间劳动者的真实处境"
            />

            {/* 工作强度数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              <StatCard value={10.5} unit="h" label="日均工作时长" color="primary" />
              <StatCard value={6.3} unit="天" label="每周工作天数" color="secondary" />
              <StatCard value={3.8} unit="天" label="每月休息天数" color="accent" />
              <StatCard value={35} unit="%" label="兼任多份工作" color="purple" />
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-gray-400 leading-relaxed text-center text-lg">
                高强度工作是夜间从业者的普遍现状。数据显示，夜间劳动者
                <span className="text-[#e94560] font-semibold"> 日均工作时长 10.5 小时</span>，
                每周工作 6.3 天，每月仅休息 3.8 天。超七成从业者夜间连续工作时长超过 4 小时，
                35% 的人员同时兼任多份工作，长期超负荷劳作成为常态。
              </p>
            </div>

            <div className="mb-20">
              <WorkIntensityChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <IncomeChart />
              <div className="flex flex-col justify-center">
                <div className="bg-[#16213e]/60 backdrop-blur-sm rounded-2xl border border-[#ffd700]/20 p-8 relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-full blur-2xl" />

                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gradient-to-b from-[#ffd700] to-[#ff8c00] rounded-full" />
                    收入与补贴现状
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-700/50">
                      <span className="text-gray-400">月均收入</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-[#ffd700] to-[#ff8c00] bg-clip-text text-transparent">
                        ¥6,200
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      夜间劳动者整体月均收入约 6200 元，低于全国城镇非私营单位就业人员平均工资。
                    </p>

                    <div className="pt-4 border-t border-gray-700/50">
                      <p className="text-gray-400 text-sm mb-4">行业薪资排名</p>
                      <div className="flex items-center justify-between text-sm mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#00cc99]" />
                          <span className="text-[#00cc99] font-medium">医疗最高</span>
                        </div>
                        <span className="text-gray-600">—</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[#e94560] font-medium">零售最低</span>
                          <span className="w-2 h-2 rounded-full bg-[#e94560]" />
                        </div>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#00cc99] via-[#ffd700] to-[#e94560] rounded-full"
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      行业间收入差距显著，医疗卫生服务岗位薪资最高，商业零售服务岗位薪资最低。
                      夜班补贴的分配同样不均衡，医疗、制造行业补贴覆盖率高、标准规范，
                      而多数平台配送、网约车岗位尚未建立标准化的夜班补贴制度。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <HealthRadarChart />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-400 leading-relaxed text-center text-lg">
                长期昼夜颠倒的作息，对劳动者身体健康造成明显影响。
                夜间从业者患上<span className="text-[#e94560] font-semibold">睡眠障碍</span>、
                <span className="text-[#e94560] font-semibold">肠胃疾病</span>、
                <span className="text-[#e94560] font-semibold">焦虑抑郁</span>等问题的概率，
                远高于白班人群。在权益保障层面，不同岗位保障水平参差不齐，
                劳动合同、社保、工伤保险的覆盖率有待提升，
                新就业形态从业者的职业健康保障更是短板突出。
              </p>
            </div>
          </div>
        </section>

        {/* 第三章：对比与反思 */}
        <section id="section-3" className="py-32 px-6 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffd700]/20 to-transparent" />
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              chapter="第三章"
              title="对比与反思：夜间劳动的价值与保障缺口"
              subtitle="从横向城市对比、纵向规模增长、保障制度反思三个角度，审视夜间劳动的价值与困境"
            />

            <div className="mb-20">
              <GrowthLineChart />
            </div>

            {/* 增长数据卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              <StatCard value={890} unit="万" label="2019年规模" color="secondary" />
              <StatCard value={2100} unit="万" label="2025年规模" color="primary" />
              <StatCard value={2.4} unit="倍" label="七年增长幅度" color="accent" />
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-gray-400 leading-relaxed text-center text-lg">
                2019 至 2025 年，国内夜间经济规模稳步增长，夜间劳动者数量从 890 万人增长至 2100 万人，
                <span className="text-[#ffd700] font-semibold">七年增长近 2.4 倍</span>，
                人员增速远超经济规模增速。七年间，平台类夜间岗位持续扩容，
                传统夜班岗位保持稳定。随着行业竞争加剧，从业者的收入增长也逐步放缓。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <CityRankChart />
              <SecurityPieChart />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-400 leading-relaxed text-center text-lg">
                目前，绝大多数夜班岗位尚未纳入特殊工种名录，相关专项保障政策存在空白。
                受行业类型、用工模式影响，各地各岗位的保障标准并不统一，
                <span className="text-[#e94560] font-semibold">平台用工的权益保障问题尤为突出</span>。
                现有政策仍需加快落地，企业的主体责任也亟待进一步压实。
              </p>
            </div>
          </div>
        </section>

        <div id="conclusion">
          <ConclusionSection />
        </div>
      </div>
    </div>
  );
}
