import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Security Middleware
 * Adds security headers to all responses to protect against common web vulnerabilities
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  const securityHeaders = {
    // Prevent XSS attacks
    'X-XSS-Protection': '1; mode=block',
    
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Permissions Policy (formerly Feature Policy)
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    
    // Strict Transport Security (HTTPS only)
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    
    // Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://dev.to https://unicons.iconscout.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://unicons.iconscout.com",
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com https://unicons.iconscout.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://dev.to",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; '),
  };

  // Apply all security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Rate limiting info (for logging/monitoring)
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  response.headers.set('X-Request-ID', `${Date.now()}-${ip.substring(0, 10)}`);

  return response;
}

/**
 * Configure which routes should use this middleware
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|assets|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.gif|.*\\.webp|.*\\.ico|.*\\.pdf).*)',
  ],
};
