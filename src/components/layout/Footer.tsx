'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pt-8 bg-[var(--first-color-second)]" style={{ backgroundImage: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)' }}>
      <div className="container mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Footer Brand */}
          <div>
            <h1 className="text-2xl font-semibold text-white mb-2">Srijan-XI</h1>
            <span className="text-sm text-gray-300">Cybersecurity & Full-Stack Developer</span>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Social */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/Srijan-Shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/srijan-xi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://twitter.com/srijan_xi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                <i className="uil uil-twitter-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-gray-700">
        <p className="text-center text-sm text-gray-300">
          © Srijan-XI. All rights reserved | Made with <i className="uil uil-heart text-red-500"></i> and <i className="fab fa-react text-blue-400"></i>
        </p>
      </div>
    </footer>
  );
}
