'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal } from 'lucide-react';
import { LanguageSwitcher } from '../ui';

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme === 'dark') {
      setDarkTheme(true);
      document.body.classList.add('dark-theme');
    }

    // Handle scroll
    const handleScroll = () => {
      setScrolled(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    
    if (newTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('selected-theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('selected-theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: 'uil-estate' },
    { name: 'About', path: '/about', icon: 'uil-user' },
    { name: 'Skills', path: '/skills', icon: 'uil-file-alt' },
    { name: 'Qualifications', path: '/qualifications', icon: 'uil-briefcase-alt' },
    { name: 'Certifications', path: '/cert', icon: 'uil-award' },
    { name: 'Projects', path: '/projects', icon: 'uil-scenery' },
    { name: 'Blog', path: '/blog', icon: 'uil-message' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-shadow ${scrolled ? 'shadow-md' : ''}`} style={{ backgroundColor: 'var(--body-color)' }}>
      <nav className="max-w-[968px] mx-auto px-6 flex items-center justify-between h-[var(--header-height)]">
        <Link href="/" className="text-[var(--title-color)] font-medium hover:text-[var(--first-color)] transition-colors flex items-center gap-2">
          <Terminal className="w-5 h-5" />
          <span>Srijan Kumar</span>
        </Link>

        <div className={`nav__menu ${showNav ? 'show-menu' : ''}`}>
          <ul className="nav__list flex flex-col gap-8 md:flex-row md:gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setShowNav(false)}
                  className={`nav__link flex flex-col items-center text-sm font-medium transition-colors ${
                    pathname === link.path ? 'active-link' : ''
                  }`}
                >
                  <i className={`${link.icon} text-xl md:hidden`}></i>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close text-2xl text-[var(--title-color)] absolute top-4 right-6 cursor-pointer md:hidden"
            onClick={() => setShowNav(false)}
          ></i>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          <i
            className={`uil ${darkTheme ? 'uil-sun' : 'uil-moon'} change-theme text-xl text-[var(--title-color)] cursor-pointer hover:text-[var(--first-color)] transition-colors`}
            onClick={toggleTheme}
          ></i>

          <div className="nav__toggle text-xl text-[var(--title-color)] cursor-pointer md:hidden" onClick={() => setShowNav(!showNav)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav__menu {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: var(--body-color);
          padding: 2rem 1.5rem 4rem;
          box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
          border-radius: 1.5rem 1.5rem 0 0;
          transition: 0.3s;
          transform: translateY(100%);
        }

        .show-menu {
          transform: translateY(0);
        }

        .nav__link {
          color: var(--title-color);
        }

        .nav__link:hover {
          color: var(--first-color);
        }

        .active-link {
          color: var(--first-color);
        }

        @media screen and (min-width: 768px) {
          .nav__menu {
            position: relative;
            bottom: auto;
            left: auto;
            width: auto;
            background-color: transparent;
            padding: 0;
            box-shadow: none;
            border-radius: 0;
            transform: none;
          }

          .nav__list {
            margin-top: 0;
          }

          .nav__close,
          .nav__toggle {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
