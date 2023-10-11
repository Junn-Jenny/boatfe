'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Header } from './components/layouts/header'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <meta name='description' content='NET25 Website' />
      </head>
      <body className={inter.className}>
        
        <ApolloWrapper>
          <Header />
          <div className='container mx-auto'>
          {children}
          </div>
        </ApolloWrapper>
        
      </body>
    </html>
  )
}
