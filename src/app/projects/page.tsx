'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio built with Next.js and Tailwind CSS',
      image: '/assets/images/portfolio1.png',
      tags: ['Next.js', 'React', 'Tailwind'],
      demo: '#',
      github: 'https://github.com/Srijan-XI'
    },
    {
      id: 2,
      title: 'Security Dashboard',
      description: 'Real-time cybersecurity monitoring and analysis platform',
      image: '/assets/images/portfolio2.png',
      tags: ['Python', 'Flask', 'MongoDB'],
      demo: '#',
      github: 'https://github.com/Srijan-XI'
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot using natural language processing',
      image: '/assets/images/portfolio3.png',
      tags: ['Python', 'TensorFlow', 'NLP'],
      demo: '#',
      github: 'https://github.com/Srijan-XI'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: '/assets/images/portfolio4.png',
      tags: ['MERN', 'Stripe', 'Redux'],
      demo: '#',
      github: 'https://github.com/Srijan-XI'
    },
    {
      id: 5,
      title: 'Network Scanner',
      description: 'Advanced network scanning and vulnerability assessment tool',
      image: '/assets/images/portfolio5.png',
      tags: ['Python', 'Scapy', 'Nmap'],
      demo: '#',
      github: 'https://github.com/Srijan-XI'
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="section__title" data-aos="fade-up">Projects</h2>
        <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">Most recent work</span>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[var(--container-color)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[var(--title-color)] mb-3">
                  {project.title}
                </h3>
                <p className="text-[var(--text-color)] mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-[var(--first-color-lighter)] text-[var(--first-color)] text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={project.demo}
                    className="btn-grad text-center flex items-center justify-center"
                  >
                    DEMO
                    <i className="uil uil-arrow-right ml-2"></i>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-grad text-center flex items-center justify-center"
                  >
                    <i className="uil uil-github-alt mr-2"></i>
                    CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
