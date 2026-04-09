import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const principles = [
  {
    title: "build, don't theorize",
    description:
      "i learn by making things work. tutorials are a starting point, not the destination.",
  },
  {
    title: "compound over time",
    description:
      "nearly 4 years of .net — optimizing apps, leading cms projects, replacing 20 logic apps with one api. nothing is wasted.",
  },
  {
    title: "read widely, build deeply",
    description:
      "i read google research papers and stoic philosophy in the same week. breadth in input, depth in output.",
  },
]

export function AboutSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-[var(--heading)]">
        <span className="text-accent mr-2">*</span> about
      </h2>

      <div className="space-y-4 mb-6">
        {principles.map((p) => (
          <div key={p.title}>
            <span className="text-[var(--heading)] font-semibold">
              {p.title}
            </span>
            <span className="text-[var(--muted)]"> — {p.description}</span>
          </div>
        ))}
      </div>

      <Link
        href="/about"
        className="inline-flex items-center gap-1 text-accent hover:underline group"
      >
        books, reads & more{" "}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </section>
  )
}
