import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { ThemeProvider } from "../components/theme-provider"
import { ClientLayout } from "../components/human-machine-toggle"
import { Analytics } from "@vercel/analytics/next"

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
"25 y/o, ai architect at TE Connectivity, bengaluru. i like to reverse engineer things — i have to know why something behaves the way it does. off duty: gym, off-road rides, anime, games, sometimes football.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hrushikesh Yadav",
    description:
      "AI Architect at TE Connectivity. Building RAG pipelines and agents in production, plus the SDLC, security, and infra they run on.",
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
  verification: {
    google: "COdwNtnxbx7ucifScCoM0n0RrSIgSSm11Np2vALsml8",
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
            <ClientLayout>{children}</ClientLayout>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
