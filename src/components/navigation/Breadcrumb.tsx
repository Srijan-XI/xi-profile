'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Don't show breadcrumb on home page
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(segment => segment);
  
  const breadcrumbItems = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    ...pathSegments.map((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      return { name, path, icon: null };
    })
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-4 px-6 mb-6"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}
              {isLast ? (
                <span className="flex items-center gap-1.5 font-medium gradient-text">
                  {item.icon}
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="flex items-center gap-1.5 hover:gradient-text transition-all duration-300 text-gray-600 dark:text-gray-400"
                >
                  {item.icon}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
