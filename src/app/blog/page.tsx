'use client';

import { useEffect } from 'react';

export default function Blog() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }

    // Load Dev.to widget script
    const script = document.createElement('script');
    script.src = 'https://dev.to/api/articles/me/published';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <h2 className="section__title" data-aos="fade-up">Blog</h2>
        <span className="section__subtitle" data-aos="fade-up" data-aos-delay="100">
          Latest articles and thoughts
        </span>

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Dev.to Integration Info */}
          <div className="bg-[var(--container-color)] p-8 rounded-lg shadow-md text-center mb-8" data-aos="fade-up" data-aos-delay="200">
            <i className="uil uil-edit text-5xl text-[var(--first-color)] mb-4"></i>
            <h3 className="text-2xl font-semibold text-[var(--title-color)] mb-4">
              Coming Soon!
            </h3>
            <p className="text-[var(--text-color)] mb-6">
              I'm currently working on publishing insightful articles about cybersecurity, web development, 
              and modern technologies. Stay tuned for updates!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://dev.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-grad"
              >
                <i className="fab fa-dev mr-2"></i>
                Visit Dev.to
              </a>
            </div>
          </div>

          {/* Placeholder Articles */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Getting Started with Cybersecurity',
                excerpt: 'Essential steps to begin your journey in cybersecurity and ethical hacking.',
                tags: ['Security', 'Tutorial'],
                date: 'Coming Soon'
              },
              {
                title: 'Building Secure Web Applications',
                excerpt: 'Best practices for developing secure full-stack applications with modern frameworks.',
                tags: ['Web Dev', 'Security'],
                date: 'Coming Soon'
              },
              {
                title: 'Introduction to Next.js & React',
                excerpt: 'A comprehensive guide to building performant web applications with Next.js.',
                tags: ['React', 'Next.js'],
                date: 'Coming Soon'
              },
              {
                title: 'AI & Machine Learning Basics',
                excerpt: 'Understanding the fundamentals of AI and ML for beginners.',
                tags: ['AI/ML', 'Python'],
                date: 'Coming Soon'
              }
            ].map((article, index) => (
              <div
                key={index}
                className="bg-[var(--container-color)] p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={(index + 3) * 100}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[var(--first-color-lighter)] text-[var(--first-color)] text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-[var(--title-color)] mb-3">
                  {article.title}
                </h3>
                <p className="text-[var(--text-color)] text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--text-color-light)]">
                    <i className="uil uil-calendar-alt"></i> {article.date}
                  </span>
                  <button className="button button--small button--link">
                    Read More
                    <i className="uil uil-arrow-right button__icon"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="700">
            <h3 className="text-xl font-semibold text-[var(--title-color)] mb-6">
              Connect with me
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://dev.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[var(--title-color)] hover:text-[var(--first-color)] transition-colors"
              >
                <i className="fab fa-dev"></i>
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[var(--title-color)] hover:text-[var(--first-color)] transition-colors"
              >
                <i className="fab fa-medium"></i>
              </a>
              <a
                href="https://hashnode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[var(--title-color)] hover:text-[var(--first-color)] transition-colors"
              >
                <i className="fas fa-blog"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
