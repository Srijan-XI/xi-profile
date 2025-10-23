'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <h2 className="section__title" data-aos="fade-up">About Me</h2>
        <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">My Introduction</span>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          {/* About Image */}
          <div className="flex justify-center" data-aos="fade-right">
            <Image
              src="/assets/images/about.png"
              alt="About Srijan Kumar"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* About Content */}
          <div data-aos="fade-left">
            <p className="text-[var(--text-color)] mb-6 leading-relaxed">
              I'm Srijan Kumar, a passionate Cybersecurity Sentinel and Full-Stack Developer with expertise in building secure, scalable applications. 
              My journey in technology is driven by curiosity and a commitment to innovation.
            </p>

            <p className="text-[var(--text-color)] mb-6 leading-relaxed">
              Specializing in modern web technologies like React, Next.js, and Express.js, combined with strong foundations in Python, C++, and Go. 
              I focus on creating solutions that are both powerful and secure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-[var(--container-color)] rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="100">
                <i className="uil uil-award text-3xl text-[var(--first-color)] mb-2"></i>
                <h3 className="text-lg font-semibold text-[var(--title-color)]">5+</h3>
                <span className="text-sm text-[var(--text-color)]">Certifications</span>
              </div>

              <div className="text-center p-4 bg-[var(--container-color)] rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="200">
                <i className="uil uil-briefcase-alt text-3xl text-[var(--first-color)] mb-2"></i>
                <h3 className="text-lg font-semibold text-[var(--title-color)]">10+</h3>
                <span className="text-sm text-[var(--text-color)]">Completed Projects</span>
              </div>

              <div className="text-center p-4 bg-[var(--container-color)] rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="300">
                <i className="uil uil-support text-3xl text-[var(--first-color)] mb-2"></i>
                <h3 className="text-lg font-semibold text-[var(--title-color)]">24/7</h3>
                <span className="text-sm text-[var(--text-color)]">Online Support</span>
              </div>
            </div>

            {/* Download CV Button */}
            <a href="/assets/documents/MyCV.pdf" download className="btn-grad" data-aos="fade-up" data-aos-delay="400">
              Download CV
              <i className="uil uil-download-alt ml-2"></i>
            </a>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-[var(--title-color)] mb-6 text-center">My Interests</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[var(--container-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="zoom-in" data-aos-delay="100">
              <i className="fas fa-shield-alt text-4xl text-[var(--first-color)] mb-4"></i>
              <h4 className="text-lg font-semibold text-[var(--title-color)] mb-2">Cybersecurity</h4>
              <p className="text-sm text-[var(--text-color)]">Network Security & Penetration Testing</p>
            </div>

            <div className="text-center p-6 bg-[var(--container-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="zoom-in" data-aos-delay="200">
              <i className="fas fa-robot text-4xl text-[var(--first-color)] mb-4"></i>
              <h4 className="text-lg font-semibold text-[var(--title-color)] mb-2">AI & ML</h4>
              <p className="text-sm text-[var(--text-color)]">Machine Learning & AI Integration</p>
            </div>

            <div className="text-center p-6 bg-[var(--container-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="zoom-in" data-aos-delay="300">
              <i className="fas fa-code text-4xl text-[var(--first-color)] mb-4"></i>
              <h4 className="text-lg font-semibold text-[var(--title-color)] mb-2">Full-Stack Dev</h4>
              <p className="text-sm text-[var(--text-color)]">Modern Web Applications</p>
            </div>

            <div className="text-center p-6 bg-[var(--container-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="zoom-in" data-aos-delay="400">
              <i className="fas fa-database text-4xl text-[var(--first-color)] mb-4"></i>
              <h4 className="text-lg font-semibold text-[var(--title-color)] mb-2">Data Science</h4>
              <p className="text-sm text-[var(--text-color)]">Data Analysis & Visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
