import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'NEWDIA — Brand & Design Studio',
  description: '브랜드 아이덴티티, 웹 디자인, 사진, 마케팅. 서울 기반 종합 디자인 스튜디오.',
  keywords: '브랜드 디자인, CI BI 디자인, 웹디자인, 브랜딩, 마케팅, 서울',
  openGraph: {
    title: 'NEWDIA — Brand & Design Studio',
    description: '브랜드 아이덴티티, 웹 디자인, 사진, 마케팅. 서울 기반 종합 디자인 스튜디오.',
    url: 'https://newdia.co.kr',
    siteName: 'NEWDIA',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
