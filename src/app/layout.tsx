import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { ThemeProvider } from "../components/theme-provider"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://hrushiyadav.com"),
  title: {
    default: "Hrushikesh Yadav",
    template: "%s | Hrushikesh Yadav",
  },
  description:
    "AI Developer. Building LLM systems, RAG pipelines, and agent architectures in production.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hrushikesh Yadav",
    description:
      "AI Developer. Building LLM systems, RAG pipelines, and agent architectures in production.",
    url: "https://hrushiyadav.com",
    siteName: "Hrushikesh Yadav",
    locale: "en_US",
    type: "website",
    images: ["https://hrushiyadav.com/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Hrushikesh Yadav",
    card: "summary_large_image",
    creator: "@hrushi_tw",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <ThemeProvider>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
