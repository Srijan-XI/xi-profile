'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  const [isVisible, setIsVisible] = useState(true);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrint}
          className="print-button btn-grad p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow no-print"
          aria-label="Print resume"
        >
          <Printer className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
