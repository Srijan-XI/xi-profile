import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import './print.css'
import { 
  Header, 
  Footer, 
  ReadingProgress, 
  BackToTop, 
  PrintButton, 
  Breadcrumb 
} from '@/components'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Srijan Kumar | Cybersecurity & Full-Stack Developer',
  description: 'Portfolio of Srijan Kumar - Cybersecurity Sentinel, AI enthusiast, and Full-Stack Developer specializing in React, Next.js, Python, and C++.',
  keywords: ['Srijan Kumar', 'Portfolio', 'Cybersecurity', 'Full-Stack Developer', 'React', 'Next.js', 'Python', 'AI/ML', 'Go', 'Express', 'MongoDB'],
  authors: [{ name: 'Srijan Kumar' }],
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Srijan Kumar | Portfolio',
    description: 'Explore Srijan Kumar\'s portfolio showcasing cybersecurity expertise, AI projects, and innovative tech solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.4/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ReadingProgress />
        <Header />
        <Breadcrumb />
        <main className="pt-[var(--header-height)]">{children}</main>
        <Footer />
        <BackToTop />
        <PrintButton />
        <script src="https://unpkg.com/aos@2.3.4/dist/aos.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof AOS !== 'undefined') {
                AOS.init({
                  duration: 700,
                  easing: 'ease-out-cubic',
                  once: false,
                  mirror: true,
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}

