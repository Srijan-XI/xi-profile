'use client';

import { useEffect } from 'react';

export default function Qualifications() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  return (
    <section className="section" id="qualifications">
      <div className="container mx-auto">
        <h2 className="section__title" data-aos="fade-up">Qualifications</h2>
        <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">My personal journey</span>

        {/* Education Journey - Displays educational background with timeline */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[var(--title-color)] mb-8 text-center" data-aos="fade-up">
            <i className="uil uil-graduation-cap text-[var(--first-color)]"></i> Education Journey
          </h3>

          {/* Timeline Container - Vertical line on mobile, card-based on desktop */}
          <div className="relative space-y-8">
            {/* Timeline vertical line for mobile */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--first-color)] md:hidden"></div>

            {/* School - Secondary Education (2018-2020) */}
            <div className="relative bg-[var(--container-color)] p-6 rounded-lg shadow-md ml-8 md:ml-0" data-aos="fade-up" data-aos-delay="100">
              {/* Timeline dot for mobile */}
              <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-[var(--first-color)] border-4 border-[var(--body-color)] md:hidden"></div>
              
              <div className="grid md:grid-cols-[1fr_1px_2fr] gap-6 items-start">
                {/* Left: Education Info */}
                <div>
                  <h4 className="text-lg font-semibold text-[var(--title-color)] mb-2">School</h4>
                  <p className="text-[var(--text-color)] text-sm mb-1">Secondary Education</p>
                  <p className="text-[var(--text-color-light)] text-xs flex items-center gap-1">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                  </p>
                </div>
                
                {/* Center: Divider line */}
                <div className="hidden md:block w-px h-full bg-[var(--first-color)]"></div>
                
                {/* Right: Description */}
                <div>
                  <p className="text-[var(--text-color)] leading-relaxed">
                    Completed secondary education with focus on Science and Mathematics. 
                    Developed strong analytical and problem-solving skills that formed the foundation for my technical journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Class 12th - Higher Secondary Education (2020-2021) */}
            <div className="relative bg-[var(--container-color)] p-6 rounded-lg shadow-md ml-8 md:ml-0" data-aos="fade-up" data-aos-delay="200">
              {/* Timeline dot for mobile */}
              <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-[var(--first-color)] border-4 border-[var(--body-color)] md:hidden"></div>
              
              <div className="grid md:grid-cols-[1fr_1px_2fr] gap-6 items-start">
                {/* Left: Education Info */}
                <div>
                  <h4 className="text-lg font-semibold text-[var(--title-color)] mb-2">Class 12th</h4>
                  <p className="text-[var(--text-color)] text-sm mb-1">Higher Secondary Education</p>
                  <p className="text-[var(--text-color-light)] text-xs flex items-center gap-1">
                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                  </p>
                </div>
                
                {/* Center: Divider line */}
                <div className="hidden md:block w-px h-full bg-[var(--first-color)]"></div>
                
                {/* Right: Description */}
                <div>
                  <p className="text-[var(--text-color)] leading-relaxed">
                    Specialized in Physics, Chemistry, and Mathematics (PCM). 
                    Achieved excellence in academics while starting to explore programming and computer science fundamentals.
                  </p>
                </div>
              </div>
            </div>

            {/* University - Bachelor's in Computer Science (2021-Present) */}
            <div className="relative bg-[var(--container-color)] p-6 rounded-lg shadow-md ml-8 md:ml-0" data-aos="fade-up" data-aos-delay="300">
              {/* Timeline dot for mobile - highlighted as current */}
              <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-[var(--first-color)] border-4 border-[var(--body-color)] md:hidden animate-pulse"></div>
              
              <div className="grid md:grid-cols-[1fr_1px_2fr] gap-6 items-start">
                {/* Left: Education Info */}
                <div>
                  <h4 className="text-lg font-semibold text-[var(--title-color)] mb-2">
                    University
                    <span className="ml-2 text-xs bg-[var(--first-color)] text-white px-2 py-1 rounded-full">Current</span>
                  </h4>
                  <p className="text-[var(--text-color)] text-sm mb-1">Bachelor's in Computer Science</p>
                  <p className="text-[var(--text-color-light)] text-xs flex items-center gap-1">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </p>
                </div>
                
                {/* Center: Divider line */}
                <div className="hidden md:block w-px h-full bg-[var(--first-color)]"></div>
                
                {/* Right: Description */}
                <div>
                  <p className="text-[var(--text-color)] leading-relaxed">
                    Pursuing Bachelor's degree in Computer Science with specialization in Cybersecurity and AI/ML. 
                    Actively involved in technical projects, hackathons, and developing expertise in full-stack development and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Link to Certifications Page */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-[var(--text-color)] mb-6">
            View all my professional certifications and achievements
          </p>
          <a href="/cert" className="btn-grad">
            View Certifications
            <i className="uil uil-award ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
