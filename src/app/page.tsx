'use client';

import Link from 'next/link';
import ContactForm from '@/components/ui/ContactForm';
import Image from 'next/image';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Parallax, PageTransition } from '@/components';

export default function Home() {
  useEffect(() => {
    // Initialize AOS when available
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).AOS) {
        (window as any).AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: false,
          mirror: true,
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="section min-h-screen flex items-center bg-[var(--body-color)]" id="home">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--title-color)] mb-4">
                Hi, I'm <span className="text-[var(--first-color)]">Srijan Kumar</span>
              </h1>
              <h3 className="text-xl md:text-2xl text-[var(--text-color)] mb-6 min-h-[2.5rem]">
                <TypeAnimation
                  sequence={[
                    'Cybersecurity Sentinel 🛡️',
                    2000,
                    'Writer ✍️',
                    2000,
                    'AI Enthusiast 🤖',
                    2000,
                    'Penetration Tester 🔐',
                    2000,
                    'STEM Innovator 🚀',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="gradient-text"
                />
              </h3>
              <p className="text-[var(--text-color)] mb-8 leading-relaxed">
                Passionate about securing digital frontiers and building innovative solutions with AI, Python, C++, React, and Next.js.
                Currently exploring the intersection of cybersecurity and modern web technologies.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/about" className="btn-grad">
                  About Me
                  <i className="uil uil-user ml-2"></i>
                </Link>
                <a href="/assets/documents/MyCV.pdf" download className="btn-grad">
                  Download CV
                  <i className="uil uil-download-alt ml-2"></i>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <Parallax speed={-2}>
              <div className="order-1 md:order-2 flex justify-center" data-aos="fade-left">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--first-color)] to-[var(--first-color-alt)] rounded-full opacity-20 animate-pulse"></div>
                  <Image
                    src="/assets/images/Pro.png"
                    alt="Srijan Kumar"
                    width={320}
                    height={320}
                    className="relative z-10 rounded-full shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </Parallax>
          </div>

          {/* Scroll Down */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="200">
            <a href="#about-preview" className="inline-flex flex-col items-center text-[var(--first-color)] hover:translate-y-1 transition-transform">
              <i className="uil uil-mouse-alt text-3xl"></i>
              <span className="text-sm mt-2">Scroll down</span>
              <i className="uil uil-arrow-down text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-[var(--container-color)]" id="about-preview">
        <div className="container mx-auto">
          <h2 className="section__title" data-aos="fade-up">About Me</h2>
          <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">My Introduction</span>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <div data-aos="fade-right">
              <Image
                src="/assets/images/about.png"
                alt="About Srijan"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div data-aos="fade-left">
              <p className="text-[var(--text-color)] mb-6 leading-relaxed">
                A cybersecurity enthusiast and full-stack developer with a passion for creating secure,
                scalable applications. I specialize in modern web technologies and AI/ML integration.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-[var(--body-color)] rounded-lg" data-aos="zoom-in" data-aos-delay="100">
                  <i className="uil uil-award text-3xl text-[var(--first-color)] mb-2"></i>
                  <h3 className="text-lg font-semibold text-[var(--title-color)]">5+</h3>
                  <span className="text-sm text-[var(--text-color)]">Certifications</span>
                </div>
                <div className="text-center p-4 bg-[var(--body-color)] rounded-lg" data-aos="zoom-in" data-aos-delay="200">
                  <i className="uil uil-briefcase-alt text-3xl text-[var(--first-color)] mb-2"></i>
                  <h3 className="text-lg font-semibold text-[var(--title-color)]">10+</h3>
                  <span className="text-sm text-[var(--text-color)]">Projects</span>
                </div>
                <div className="text-center p-4 bg-[var(--body-color)] rounded-lg" data-aos="zoom-in" data-aos-delay="300">
                  <i className="uil uil-code text-3xl text-[var(--first-color)] mb-2"></i>
                  <h3 className="text-lg font-semibold text-[var(--title-color)]">15+</h3>
                  <span className="text-sm text-[var(--text-color)]">Technologies</span>
                </div>
              </div>

              <Link href="/about" className="btn-grad">
                Learn More
                <i className="uil uil-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section bg-[var(--body-color)]" id="skills-preview">
        <div className="container mx-auto">
          <h2 className="section__title" data-aos="fade-up">Skills</h2>
          <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">My Technical Level</span>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-[var(--container-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <i className="fab fa-react text-4xl text-[var(--first-color)] mb-4"></i>
              <h3 className="text-xl font-semibold text-[var(--title-color)] mb-3">Frontend Development</h3>
              <p className="text-[var(--text-color)] text-sm">React, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript ES6+</p>
            </div>

            <div className="p-6 bg-[var(--container-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-server text-4xl text-[var(--first-color)] mb-4"></i>
              <h3 className="text-xl font-semibold text-[var(--title-color)] mb-3">Backend Development</h3>
              <p className="text-[var(--text-color)] text-sm">Node.js, Express.js, Python, Go, MongoDB, REST APIs</p>
            </div>

            <div className="p-6 bg-[var(--container-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-shield-alt text-4xl text-[var(--first-color)] mb-4"></i>
              <h3 className="text-xl font-semibold text-[var(--title-color)] mb-3">Cybersecurity</h3>
              <p className="text-[var(--text-color)] text-sm">Network Security, Penetration Testing, Security Analysis</p>
            </div>
          </div>

          <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="400">
            <Link href="/skills" className="btn-grad">
              View All Skills
              <i className="uil uil-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section bg-[var(--container-color)]" id="projects-preview">
        <div className="container mx-auto">
          <h2 className="section__title" data-aos="fade-up">Projects</h2>
          <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">Most recent work</span>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[var(--body-color)] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative h-48">
                  <Image
                    src={`/assets/images/portfolio${i}.png`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--title-color)] mb-2">Portfolio Project {i}</h3>
                  <p className="text-[var(--text-color)] text-sm mb-4">
                    Innovative solution showcasing modern web technologies
                  </p>
                  <a href="#" className="btn-grad">
                    Demo
                    <i className="uil uil-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="400">
            <Link href="/projects" className="btn-grad">
              View All Projects
              <i className="uil uil-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[var(--body-color)]" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="zoom-in">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageTransition>
  );
}
