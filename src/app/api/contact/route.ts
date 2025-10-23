import { NextRequest, NextResponse } from 'next/server';
import { 
  sanitizeInput, 
  sanitizeEmail, 
  detectAttackPattern,
  RateLimiter 
} from '@/lib/security';

// Rate limiter: 5 attempts per 15 minutes per IP
const rateLimiter = new RateLimiter(5, 15);

/**
 * Contact Form API Route with Security Protection
 * Demonstrates secure input handling and validation
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting check
    if (!rateLimiter.check(ip)) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          code: 'RATE_LIMIT_EXCEEDED'
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = subject ? sanitizeInput(subject) : '';
    const sanitizedMessage = sanitizeInput(message);

    // Validate and sanitize email
    const sanitizedEmail = sanitizeEmail(email);
    if (!sanitizedEmail) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Detect attack patterns
    const nameCheck = detectAttackPattern(name);
    const messageCheck = detectAttackPattern(message);

    if (nameCheck.isSuspicious || messageCheck.isSuspicious) {
      console.warn('Suspicious input detected:', {
        ip,
        type: nameCheck.type || messageCheck.type,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { 
          error: 'Invalid input detected',
          code: 'SECURITY_VIOLATION'
        },
        { status: 400 }
      );
    }

    // Input length validation
    if (sanitizedName.length > 100 || sanitizedMessage.length > 5000) {
      return NextResponse.json(
        { error: 'Input too long' },
        { status: 400 }
      );
    }

    // TODO: Process the sanitized data (send email, save to database, etc.)
    console.log('Contact form submission:', {
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      ip,
      timestamp: new Date().toISOString(),
    });

    // Success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been received. Thank you for contacting us!'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'An error occurred processing your request' },
      { status: 500 }
    );
  }
}

// Prevent other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
