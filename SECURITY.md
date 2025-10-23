# 🔒 Security Implementation Guide

## Overview
This document describes the comprehensive security measures implemented in the xi-profile project to protect against common web vulnerabilities including SQL injection, XSS, CSRF, clickjacking, and more.

## 🛡️ Security Features Implemented

### 1. Input Sanitization & Validation (`src/lib/security.ts`)

#### Functions Available:

##### `sanitizeInput(input: string)`
- **Purpose**: General text sanitization
- **Protection**: SQL injection, XSS, command injection
- **Usage**:
```typescript
import { sanitizeInput } from '@/lib/security';

const userInput = sanitizeInput(req.body.username);
```

##### `sanitizeEmail(email: string)`
- **Purpose**: Email validation and normalization
- **Protection**: Invalid emails, injection patterns
- **Returns**: Valid email or `null`

##### `sanitizeURL(url: string)`
- **Purpose**: URL validation
- **Protection**: XSS via javascript:, data:, vbscript: protocols
- **Returns**: Valid HTTPS/HTTP URL or `null`

##### `sanitizeHTML(dirty: string)`
- **Purpose**: HTML content sanitization
- **Protection**: XSS through HTML tags
- **Uses**: DOMPurify (client-side), escape characters (server-side)

##### `sanitizeAlphanumeric(input: string)`
- **Purpose**: Username, ID sanitization
- **Protection**: Special character injection
- **Allows**: a-z, A-Z, 0-9, _, -

##### `sanitizeJSON(input: string)`
- **Purpose**: Safe JSON parsing with nested sanitization
- **Protection**: JSON injection attacks

#### Attack Detection:

##### `detectAttackPattern(input: string)`
Detects common attack patterns:
- SQL Injection (SELECT, INSERT, UNION, etc.)
- XSS (script tags, event handlers)
- Path Traversal (../, ..%2F)
- Command Injection (;, |, &, `, etc.)
- Code Injection (eval, exec, system)
- Iframe Injection

**Example**:
```typescript
const { isSuspicious, type } = detectAttackPattern(userInput);
if (isSuspicious) {
  console.warn(`Attack detected: ${type}`);
  // Reject request
}
```

### 2. Rate Limiting

#### `RateLimiter` Class
Prevents brute force attacks by limiting request frequency.

**Configuration**:
- Default: 5 attempts per 15 minutes
- Customizable per endpoint

**Usage**:
```typescript
import { RateLimiter } from '@/lib/security';

const limiter = new RateLimiter(5, 15); // 5 attempts, 15 minutes

if (!limiter.check(userIP)) {
  return { error: 'Rate limit exceeded', status: 429 };
}
```

### 3. Security Headers (`src/middleware.ts`)

The middleware automatically applies these security headers to all responses:

#### Headers Applied:

1. **X-XSS-Protection**: `1; mode=block`
   - Enables browser XSS filter

2. **X-Frame-Options**: `DENY`
   - Prevents clickjacking attacks
   - Disallows embedding in iframes

3. **X-Content-Type-Options**: `nosniff`
   - Prevents MIME type sniffing

4. **Strict-Transport-Security**: `max-age=63072000; includeSubDomains; preload`
   - Forces HTTPS connections
   - Includes all subdomains
   - Preload list eligible

5. **Referrer-Policy**: `strict-origin-when-cross-origin`
   - Controls referrer information

6. **Permissions-Policy**: `camera=(), microphone=(), geolocation=()`
   - Restricts browser features

7. **Content-Security-Policy** (CSP):
   - `default-src 'self'` - Only load resources from same origin
   - `script-src` - Allowed script sources (CDNs, self)
   - `style-src` - Allowed style sources (Google Fonts, CDNs)
   - `font-src` - Allowed font sources
   - `img-src` - Allowed image sources (data:, https:, self)
   - `object-src 'none'` - Blocks plugins
   - `frame-ancestors 'none'` - Prevents embedding
   - `upgrade-insecure-requests` - Upgrades HTTP to HTTPS

### 4. API Route Security (`src/app/api/contact/route.ts`)

Example secure API implementation with:

#### Features:
- ✅ Input sanitization (all fields)
- ✅ Email validation
- ✅ Attack pattern detection
- ✅ Rate limiting per IP
- ✅ Input length validation
- ✅ Method restriction (POST only)
- ✅ Detailed error logging
- ✅ CORS protection

#### Response Codes:
- `200` - Success
- `400` - Invalid input / Security violation
- `405` - Method not allowed
- `429` - Rate limit exceeded
- `500` - Server error

**Usage Example**:
```typescript
// Client-side form submission
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: sanitizeInput(formData.name),
    email: formData.email,
    message: sanitizeInput(formData.message)
  })
});
```

### 5. Password Security

#### `validatePasswordStrength(password: string)`
Validates password strength with scoring:

**Requirements**:
- ✅ Minimum 8 characters (20 points)
- ✅ 12+ characters (10 bonus points)
- ✅ Lowercase letters (20 points)
- ✅ Uppercase letters (20 points)
- ✅ Numbers (20 points)
- ✅ Special characters (20 points)

**Strong Password**: Score ≥ 80

**Returns**:
```typescript
{
  isStrong: boolean,
  score: number,
  feedback: string[]
}
```

### 6. Cookie Security

#### `SECURE_COOKIE_OPTIONS`
Pre-configured secure cookie options:
- `httpOnly: true` - Prevents JavaScript access
- `secure: true` - HTTPS only (production)
- `sameSite: 'strict'` - CSRF protection
- `maxAge: 604800` - 7 days expiration

## 🚀 How to Use

### For Forms (Client-Side)

```typescript
'use client';
import { useState } from 'react';
import { sanitizeInput, sanitizeEmail } from '@/lib/security';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side sanitization
    const sanitized = {
      name: sanitizeInput(formData.name),
      email: sanitizeEmail(formData.email),
      message: sanitizeInput(formData.message)
    };

    if (!sanitized.email) {
      alert('Invalid email address');
      return;
    }

    // Send to secure API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sanitized)
    });

    const result = await response.json();
    
    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

### For API Routes (Server-Side)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { sanitizeInput, detectAttackPattern, RateLimiter } from '@/lib/security';

const rateLimiter = new RateLimiter(10, 10); // 10 requests per 10 minutes

export async function POST(request: NextRequest) {
  const ip = request.ip || 'unknown';
  
  // Rate limiting
  if (!rateLimiter.check(ip)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    );
  }

  const body = await request.json();
  
  // Sanitize inputs
  const sanitizedData = sanitizeInput(body.data);
  
  // Detect attacks
  const { isSuspicious, type } = detectAttackPattern(body.data);
  if (isSuspicious) {
    console.warn(`Attack detected: ${type} from ${ip}`);
    return NextResponse.json(
      { error: 'Invalid input' },
      { status: 400 }
    );
  }

  // Process sanitized data
  // ...
  
  return NextResponse.json({ success: true });
}
```

## 🔍 Security Testing

### Test Cases to Verify:

1. **SQL Injection Protection**:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"admin","email":"test@test.com","message":"SELECT * FROM users WHERE 1=1"}'
```
Expected: `400 Bad Request` with security violation

2. **XSS Protection**:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"<script>alert(1)</script>","email":"test@test.com","message":"Hello"}'
```
Expected: Script tags removed or request blocked

3. **Rate Limiting**:
```bash
for i in {1..10}; do
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@test.com","message":"Test"}';
done
```
Expected: First 5 succeed, rest return `429 Rate Limit Exceeded`

## 📋 Security Checklist

- ✅ Input sanitization on all user inputs
- ✅ SQL injection pattern detection
- ✅ XSS prevention (script tags, event handlers)
- ✅ Command injection protection
- ✅ Path traversal prevention
- ✅ Email validation with RFC compliance
- ✅ URL validation with protocol checking
- ✅ Rate limiting per IP address
- ✅ Security headers (CSP, XSS Protection, etc.)
- ✅ HTTPS enforcement (HSTS)
- ✅ Clickjacking protection (X-Frame-Options)
- ✅ MIME sniffing prevention
- ✅ Cookie security (httpOnly, secure, sameSite)
- ✅ Attack pattern detection and logging
- ✅ Method restriction on API routes
- ✅ CORS protection
- ✅ Content Security Policy

## 🔒 Production Recommendations

1. **Environment Variables**:
   - Store API keys in `.env.local`
   - Never commit secrets to git
   - Use different keys for dev/production

2. **HTTPS Only**:
   - Always use HTTPS in production
   - Configure HSTS preload

3. **Monitoring**:
   - Log all security violations
   - Monitor rate limit triggers
   - Set up alerts for suspicious activity

4. **Regular Updates**:
   - Keep dependencies updated
   - Run `npm audit` regularly
   - Review security advisories

5. **Database Security** (if adding backend):
   - Use parameterized queries
   - Never concatenate SQL strings
   - Use ORM/query builders
   - Implement least privilege principle

6. **Authentication** (if adding):
   - Use bcrypt/argon2 for password hashing
   - Implement JWT with short expiration
   - Use secure session management
   - Add 2FA for sensitive operations

## 🆘 Incident Response

If a security vulnerability is discovered:

1. **Immediate Action**:
   - Take affected service offline if critical
   - Review logs for exploitation attempts
   - Document the vulnerability

2. **Patch**:
   - Implement fix
   - Test thoroughly
   - Deploy to production

3. **Notify**:
   - Inform affected users if data breach
   - Update security documentation
   - Review similar code patterns

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Web Security Fundamentals](https://web.dev/secure/)

---

**Last Updated**: October 23, 2025  
**Status**: ✅ Production Ready  
**Maintained by**: Srijan Kumar
