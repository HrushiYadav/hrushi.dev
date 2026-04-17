import { ScrambleText } from "@/components/scramble-text"
import { SectionList } from "@/components/section-list"
import { workItems } from "@/lib/work-items"
import { Metadata } from "next"

export default function WorkPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-[var(--heading)]">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="work" />
      </h1>

      <p className="text-[var(--muted)] mb-12 leading-relaxed">
        here&apos;s where i&apos;ve worked and the kind of products i helped ship.
      </p>

      <SectionList title="work" items={workItems} showTitle={false} />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Work",
  description: "Work experience — from .NET to AI at TE Connectivity.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    images: [
      {
        url: "https://hrushiyadav.com/og/home?title=work",
      },
    ],
  },
}
