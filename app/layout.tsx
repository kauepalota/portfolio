import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'

import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'

const sans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Kauê Palota',
  description:
    'Welcome to my website portfolio! Here you can find information about my projects and skills.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning={true}>
      <head />

      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          sans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
