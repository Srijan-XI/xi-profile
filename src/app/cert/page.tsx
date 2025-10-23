'use client';

import { useEffect } from 'react';

export default function Certifications() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  const certifications = [
    {
      title: 'Cybersecurity Essentials',
      organization: 'IBM SkillsBuild',
      description: 'Comprehensive training in cybersecurity fundamentals and best practices',
      icon: 'uil-shield-check',
      color: 'text-blue-500',
      date: '2023'
    },
    {
      title: 'Career Essentials in Cybersecurity',
      organization: 'Microsoft & LinkedIn',
      description: 'Industry-recognized certification covering security principles',
      icon: 'uil-microsoft',
      color: 'text-green-500',
      date: '2023'
    },
    {
      title: 'Linux Foundation Certified',
      organization: 'The Linux Foundation',
      description: 'Linux system administration and command-line proficiency',
      icon: 'fab fa-linux',
      color: 'text-yellow-600',
      date: '2024'
    },
    {
      title: 'Web Development Certification',
      organization: 'Acmegrade',
      description: 'Full-stack web development with modern frameworks',
      icon: 'uil-browser',
      color: 'text-purple-500',
      date: '2024'
    },
    {
      title: 'Data Visualization & Analysis',
      organization: 'Tata Group',
      description: 'Advanced data visualization techniques and analytical methodologies',
      icon: 'uil-chart-line',
      color: 'text-indigo-500',
      date: '2024'
    }
  ];

  return (
    <section className="section" id="certifications">
      <div className="container mx-auto">
        <h2 className="section__title" data-aos="fade-up">Certifications</h2>
        <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">
          Professional achievements and credentials
        </span>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[var(--container-color)] p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-4">
                  <i className={`${cert.icon} text-5xl ${cert.color}`}></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--title-color)] mb-2">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="text-sm text-[var(--first-color)] font-medium mb-3">
                  {cert.organization}
                </p>

                {/* Date Badge */}
                <span className="inline-block px-3 py-1 bg-[var(--first-color-lighter)] text-[var(--first-color)] text-xs rounded-full mb-3">
                  <i className="uil uil-calendar-alt"></i> {cert.date}
                </span>

                {/* Description */}
                <p className="text-sm text-[var(--text-color)] leading-relaxed">
                  {cert.description}
                </p>

                {/* Verify Badge */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[var(--text-color-light)]">
                  <i className="uil uil-check-circle text-green-500"></i>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-[var(--container-color)] p-8 rounded-lg shadow-md" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-[var(--title-color)] mb-6 text-center">
            Certification Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <i className="uil uil-award text-4xl text-[var(--first-color)] mb-2"></i>
              <h4 className="text-2xl font-bold text-[var(--title-color)]">5+</h4>
              <p className="text-sm text-[var(--text-color)]">Total Certifications</p>
            </div>
            <div className="text-center">
              <i className="uil uil-building text-4xl text-[var(--first-color)] mb-2"></i>
              <h4 className="text-2xl font-bold text-[var(--title-color)]">5</h4>
              <p className="text-sm text-[var(--text-color)]">Organizations</p>
            </div>
            <div className="text-center">
              <i className="uil uil-clock text-4xl text-[var(--first-color)] mb-2"></i>
              <h4 className="text-2xl font-bold text-[var(--title-color)]">200+</h4>
              <p className="text-sm text-[var(--text-color)]">Hours Trained</p>
            </div>
            <div className="text-center">
              <i className="uil uil-trophy text-4xl text-[var(--first-color)] mb-2"></i>
              <h4 className="text-2xl font-bold text-[var(--title-color)]">100%</h4>
              <p className="text-sm text-[var(--text-color)]">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-[var(--text-color)] mb-6">
            Continuously learning and expanding my skill set through professional certifications
          </p>
          <a href="/skills" className="btn-grad">
            View All Skills
            <i className="uil uil-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
