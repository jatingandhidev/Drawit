import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ConvexClientProvider } from '@/providers/convex-client-provider'
import { ModalProvider } from '@/providers/modal-provider'
import { Suspense } from 'react'
import { Loading } from '@/components/auth/loading'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Drawit',
    template: '%s',
  },
  description:
    'A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing. Using the newest technologies such as Next.js. 14, Clerk, Convex and LiveBlocks.',
  openGraph: {
    type: 'website',
    url: 'https://drawit-salvador.vercel.app/',
    title: 'Drawit',
    description:
      'A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing. Using the newest technologies such as Next.js. 14, Clerk, Convex and LiveBlocks.',
    images: [
      {
        url: 'https://metatags.io/images/meta-tags.png',
        width: 1200,
        height: 630,
        alt: 'Drawit preview image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drawit',
    description:
      'A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing. Using the newest technologies such as Next.js. 14, Clerk, Convex and LiveBlocks.',
    images: ['https://metatags.io/images/meta-tags.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  )
}
