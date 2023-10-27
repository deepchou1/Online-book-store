import type { Metadata } from 'next'
import Header from '@/components/Header';
import './globals.css'
import '@/styles/fonts.css';

export const metadata: Metadata = {
  title: 'Book Library',
  description: 'Book search from Book list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-mono bg-white'>
        <Header/>
        <main id="main" className="p-6 lg:p-12 rounded bg-purple mx-4 mb-4">
          {children}
        </main>
        </body>
    </html>
  )
}
