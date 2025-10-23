'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
  const [openSkill, setOpenSkill] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  const toggleSkill = (index: number) => {
    setOpenSkill(openSkill === index ? null : index);
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'uil-brackets-curly',
      skills: ['Python', 'C/C++', 'Go (Golang)', 'JavaScript ES6+', 'TypeScript', 'Java']
    },
    {
      title: 'Technologies',
      icon: 'uil-layer-group',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Express.js', 'React.js', 'Next.js', 'MongoDB']
    },
    {
      title: 'IT Constructs',
      icon: 'uil-server',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Microservices', 'REST APIs']
    },
    {
      title: 'Networking & Security',
      icon: 'uil-shield-check',
      skills: ['Network Security', 'Penetration Testing', 'Ethical Hacking', 'Firewall Configuration', 'Wireshark', 'Nmap']
    },
    {
      title: 'Python Frameworks',
      icon: 'fab fa-python',
      skills: ['Django', 'Flask', 'FastAPI', 'TensorFlow', 'PyTorch', 'Pandas']
    },
    {
      title: 'Tools & Platforms',
      icon: 'uil-wrench',
      skills: ['Git & GitHub', 'Docker', 'Linux', 'VS Code', 'Postman', 'MongoDB Compass']
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container mx-auto">
        <h2 className="section__title" data-aos="fade-up">Skills</h2>
        <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">My technical level</span>

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[var(--container-color)] rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleSkill(index)}
                className="w-full p-6 flex items-center justify-between hover:bg-[var(--body-color)] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <i className={`${category.icon} text-2xl text-[var(--first-color)]`}></i>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-[var(--title-color)]">
                      {category.title}
                    </h3>
                    <span className="text-sm text-[var(--text-color-light)]">
                      {category.skills.length} skills
                    </span>
                  </div>
                </div>
                <i className={`uil ${openSkill === index ? 'uil-angle-up' : 'uil-angle-down'} text-2xl text-[var(--first-color)] transition-transform`}></i>
              </button>

              {/* Skills Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openSkill === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 text-[var(--text-color)]"
                      >
                        <i className="uil uil-check-circle text-[var(--first-color)]"></i>
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Certifications Page */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-[var(--text-color)] mb-4">
            Want to see all my professional certifications?
          </p>
          <a href="/cert" className="btn-grad">
            View All Certifications
            <i className="uil uil-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
