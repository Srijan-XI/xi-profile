/**
 * Security Utilities for XSS, Injection, and Input Validation
 * Provides comprehensive protection against common web vulnerabilities
 */

import validator from 'validator';

/**
 * Sanitize HTML to prevent XSS attacks
 * Removes potentially dangerous HTML tags and attributes
 */
export function sanitizeHTML(dirty: string): string {
  if (typeof window === 'undefined') {
    // Server-side: basic sanitization
    return dirty
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  // Client-side: Use DOMPurify
  const DOMPurify = require('dompurify');
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
}

/**
 * Validate and sanitize email addresses
 */
export function sanitizeEmail(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  
  if (!validator.isEmail(trimmed)) {
    return null;
  }
  
  return validator.normalizeEmail(trimmed) || null;
}

/**
 * Validate and sanitize URLs
 */
export function sanitizeURL(url: string): string | null {
  const trimmed = url.trim();
  
  if (!validator.isURL(trimmed, {
    protocols: ['http', 'https'],
    require_protocol: true,
  })) {
    return null;
  }
  
  // Additional check for common injection patterns
  if (/javascript:|data:|vbscript:|file:/i.test(trimmed)) {
    return null;
  }
  
  return trimmed;
}

/**
 * Sanitize general text input
 * Prevents SQL injection patterns, XSS, and command injection
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  let sanitized = input.trim();

  // Remove SQL injection patterns
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|DECLARE)\b)/gi,
    /(--|\/\*|\*\/|;|'|"|`)/g,
    /(\bOR\b.*=.*|1=1|'=')/gi,
    /(\bAND\b.*=.*)/gi,
  ];

  sqlPatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });

  // Remove potential XSS vectors
  sanitized = sanitized
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove event handlers
    .replace(/javascript:/gi, '')
    .replace(/data:text\/html/gi, '');

  // Remove command injection patterns
  const commandPatterns = [
    /[;&|`$()]/g,
    /\b(eval|exec|system|shell_exec|passthru|proc_open|popen)\b/gi,
  ];

  commandPatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });

  return sanitized;
}

/**
 * Validate phone numbers (international format)
 */
export function sanitizePhone(phone: string): string | null {
  const cleaned = phone.replace(/\D/g, '');
  
  if (validator.isMobilePhone(cleaned, 'any', { strictMode: false })) {
    return cleaned;
  }
  
  return null;
}

/**
 * Sanitize alphanumeric input (usernames, IDs, etc.)
 */
export function sanitizeAlphanumeric(input: string): string {
  return input.replace(/[^a-zA-Z0-9_-]/g, '');
}

/**
 * Validate and sanitize JSON input
 */
export function sanitizeJSON(input: string): object | null {
  try {
    const parsed = JSON.parse(input);
    
    // Recursively sanitize string values
    const sanitizeObject = (obj: any): any => {
      if (typeof obj === 'string') {
        return sanitizeInput(obj);
      }
      if (Array.isArray(obj)) {
        return obj.map(sanitizeObject);
      }
      if (obj && typeof obj === 'object') {
        const sanitized: any = {};
        for (const key in obj) {
          sanitized[sanitizeAlphanumeric(key)] = sanitizeObject(obj[key]);
        }
        return sanitized;
      }
      return obj;
    };
    
    return sanitizeObject(parsed);
  } catch {
    return null;
  }
}

/**
 * Rate limiting helper (client-side)
 * Prevents brute force attacks by limiting request frequency
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private maxAttempts: number;
  private timeWindow: number; // in milliseconds

  constructor(maxAttempts: number = 5, timeWindowMinutes: number = 15) {
    this.maxAttempts = maxAttempts;
    this.timeWindow = timeWindowMinutes * 60 * 1000;
  }

  /**
   * Check if the action is allowed
   * @param identifier - Unique identifier (e.g., IP, email, sessionID)
   * @returns true if allowed, false if rate limited
   */
  check(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Filter out old attempts outside the time window
    const recentAttempts = attempts.filter(time => now - time < this.timeWindow);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false; // Rate limited
    }
    
    // Record this attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }

  /**
   * Reset attempts for an identifier
   */
  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

/**
 * Content Security Policy headers helper
 */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://cdnjs.cloudflare.com', 'https://dev.to'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://cdnjs.cloudflare.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com'],
  'img-src': ["'self'", 'data:', 'https:', 'blob:'],
  'connect-src': ["'self'", 'https://dev.to'],
  'frame-src': ["'self'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': [],
};

/**
 * Generate CSP header string
 */
export function generateCSPHeader(): string {
  return Object.entries(CSP_DIRECTIVES)
    .map(([directive, values]) => 
      values.length > 0 
        ? `${directive} ${values.join(' ')}` 
        : directive
    )
    .join('; ');
}

/**
 * Escape special characters for safe rendering
 */
export function escapeHTML(str: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  
  return str.replace(/[&<>"'/]/g, char => map[char]);
}

/**
 * Password strength validator
 */
export function validatePasswordStrength(password: string): {
  isStrong: boolean;
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) score += 20;
  else feedback.push('Password must be at least 8 characters');

  if (password.length >= 12) score += 10;

  if (/[a-z]/.test(password)) score += 20;
  else feedback.push('Include lowercase letters');

  if (/[A-Z]/.test(password)) score += 20;
  else feedback.push('Include uppercase letters');

  if (/[0-9]/.test(password)) score += 20;
  else feedback.push('Include numbers');

  if (/[^a-zA-Z0-9]/.test(password)) score += 20;
  else feedback.push('Include special characters');

  const isStrong = score >= 80;

  return { isStrong, score, feedback };
}

/**
 * Check for common attack patterns
 */
export function detectAttackPattern(input: string): {
  isSuspicious: boolean;
  type: string | null;
} {
  const patterns = [
    { regex: /(\bSELECT\b.*\bFROM\b|\bINSERT\b.*\bINTO\b)/i, type: 'SQL Injection' },
    { regex: /<script[^>]*>.*?<\/script>/i, type: 'XSS Attack' },
    { regex: /(\.\.[\/\\]|\.\.%2[fF])/i, type: 'Path Traversal' },
    { regex: /(;|\||&|`|\$\(|\${)/i, type: 'Command Injection' },
    { regex: /(eval\(|exec\(|system\()/i, type: 'Code Injection' },
    { regex: /<iframe[^>]*>/i, type: 'Iframe Injection' },
  ];

  for (const pattern of patterns) {
    if (pattern.regex.test(input)) {
      return { isSuspicious: true, type: pattern.type };
    }
  }

  return { isSuspicious: false, type: null };
}

/**
 * Secure cookie options helper
 */
export const SECURE_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

/**
 * Generate nonce for CSP
 */
export function generateNonce(): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  
  // Fallback for server-side
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}
