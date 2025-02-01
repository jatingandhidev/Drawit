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
    'A powerful collaborative real-time whiteboard built with cutting-edge technologies like Next.js 15, Clerk, Convex, and LiveBlocks. Create from scratch with features like shape tools (rectangles, ellipses), sticky notes, and freehand drawing. Seamlessly sync and collaborate in real-time with a live database for an interactive and dynamic experience. Perfect for teams, designers, and remote brainstorming',
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
