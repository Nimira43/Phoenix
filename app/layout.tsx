import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { AuthProvider } from '@/context/auth'
import AuthButtons from '@/components/auth-buttons'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Phoenix',
  description: 'Expense tracker application using Next and Firebase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <AuthProvider>
          <nav className='bg-primary text-light p-5 h-24 flex items-center justify-between'>
            <Link
              href='/'
              className='text-3xl logo-font'
            >
              Phoenix
            </Link>
            <ul className='flex gap-6 items-center'>
              <li>
                <Link
                  href='/property-search'
                  className='hover:text-support-hover transitioning'
                >
                  Search
                </Link>
              </li>
              <li>
                <AuthButtons />
              </li>
            </ul>
          </nav>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
