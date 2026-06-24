import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: '首页' },
  { id: 'section-1', label: '全景扫描' },
  { id: 'section-2', label: '深度剖析' },
  { id: 'section-3', label: '对比反思' },
  { id: 'conclusion', label: '结语' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className="group flex items-center gap-3"
            >
              <span
                className={`text-xs transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
                  activeSection === section.id
                    ? 'text-white opacity-100 translate-x-0'
                    : 'text-gray-500'
                }`}
              >
                {section.label}
              </span>
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-[#e94560] border-[#e94560] scale-125 shadow-lg shadow-[#e94560]/50'
                    : 'border-gray-600 group-hover:border-[#e94560]/50'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
