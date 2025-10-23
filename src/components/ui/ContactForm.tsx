"use client";

import React, { useState } from 'react';
import { sanitizeInput, sanitizeEmail } from '@/lib/security';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in name, email and message.' });
      return;
    }

    const cleanEmail = sanitizeEmail(email);
    if (!cleanEmail) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    const payload = {
      name: sanitizeInput(name),
      email: cleanEmail,
      subject: sanitizeInput(subject) || 'Contact from portfolio',
      message: sanitizeInput(message),
    };

    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data?.error || 'Failed to send message' });
      } else {
        setStatus({ type: 'success', message: data?.message || 'Message sent successfully!' });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'An unexpected error occurred.' });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full" data-aos="fade-up">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-[var(--title-color)] mb-2">Get In Touch</h3>
            <p className="text-[var(--text-color)] leading-relaxed">
              I'm currently open to new opportunities and collaborations in the cybersecurity field. 
              Whether you have a question or just want to connect, I'll do my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#24C6DC] to-[#514A9D] flex items-center justify-center flex-shrink-0">
                <i className="uil uil-envelope text-white text-xl"></i>
              </div>
              <div>
                <p className="text-sm text-[var(--text-color)] mb-1">Email</p>
                <a href="mailto:srijansah11@outlook.com" className="text-[var(--title-color)] font-medium hover:text-[var(--first-color)] transition">
                  Email Me
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#24C6DC] to-[#514A9D] flex items-center justify-center flex-shrink-0">
                <i className="uil uil-map-marker text-white text-xl"></i>
              </div>
              <div>
                <p className="text-sm text-[var(--text-color)] mb-1">Location</p>
                <p className="text-[var(--title-color)] font-medium">📍India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#24C6DC] to-[#514A9D] flex items-center justify-center flex-shrink-0">
                <i className="uil uil-linkedin text-white text-xl"></i>
              </div>
              <div>
                <p className="text-sm text-[var(--text-color)] mb-1">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/srijan-xi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--title-color)] font-medium hover:text-[var(--first-color)] transition"
                >
                  Srijan-XI
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name and Email - Two Columns */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--title-color)] mb-2">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full bg-[var(--container-color)] text-[var(--title-color)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#24C6DC] transition"
                  placeholder="Your name"
                  aria-label="Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--title-color)] mb-2">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full bg-[var(--container-color)] text-[var(--title-color)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#24C6DC] transition"
                  placeholder="Your email address"
                  aria-label="Email"
                />
              </div>
            </div>

            {/* Subject - Full Width */}
            <div>
              <label className="block text-sm font-medium text-[var(--title-color)] mb-2">
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                className="w-full bg-[var(--container-color)] text-[var(--title-color)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#24C6DC] transition"
                placeholder="Subject of your message"
                aria-label="Subject"
              />
            </div>

            {/* Message - Full Width */}
            <div>
              <label className="block text-sm font-medium text-[var(--title-color)] mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[var(--container-color)] text-[var(--title-color)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#24C6DC] transition resize-none"
                placeholder="Your message here..."
                rows={6}
                aria-label="Message"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-4">
              {status && (
                <div
                  className={`text-sm font-medium ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}
                  role="status"
                >
                  {status.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <i className="uil uil-message"></i>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
