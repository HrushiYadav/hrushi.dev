import { ScrambleText } from "@/components/scramble-text"
import { Metadata } from "next"

const principles = [
  {
    title: "build, don't theorize",
    description:
      "i learn by making things work. tutorials are a starting point, not the destination. if i can't run it locally, i don't understand it yet.",
  },
  {
    title: "compound over time",
    description:
      "nearly 4 years of .net gave me production instincts that most ai devs skip. optimizing build times, leading cms projects end-to-end, replacing 20 logic apps with a single centralized api, load testing with jmeter, shipping react apps with redux — every skill compounds. nothing is wasted.",
  },
  {
    title: "read widely, build deeply",
    description:
      "i read google research papers and stoic philosophy in the same week. breadth in input, depth in output. the best ideas come from connecting things that don't usually go together.",
  },
  {
    title: "share what you learn",
    description:
      "writing about search algorithms forced me to actually understand them. contributing to open source taught me more than any course. if you can't explain it simply, you don't know it well enough.",
  },
]

const bookCategories = [
  {
    label: "on building",
    books: [
      { title: "introduction to agents", author: "alan blount, antonio gulli et al. (google)" },
      { title: "agentic design patterns", author: "antonio gulli" },
    ],
  },
  {
    label: "on thinking",
    books: [
      { title: "the almanack of naval ravikant", author: "eric jorgenson" },
      { title: "atomic habits", author: "james clear" },
      { title: "how to stop worrying and start living", author: "dale carnegie" },
    ],
  },
  {
    label: "on grit",
    books: [
      { title: "can't hurt me", author: "david goggins" },
      { title: "discipline is destiny", author: "ryan holiday" },
    ],
  },
  {
    label: "on people",
    books: [
      { title: "how to win friends and influence people", author: "dale carnegie" },
      { title: "tuesdays with morrie", author: "mitch albom" },
      { title: "half torn hearts", author: "novoneel chakraborty" },
    ],
  },
]

const currentlyReading = [
  "tweets & blogs from sam altman, paul graham, andrej karpathy",
  "arxiv papers on multi-agent systems and data science automation",
  "whatever shows up in my feed that makes me think differently",
]

export default function AboutPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-[var(--heading)]">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="about" />
      </h1>

      <p className="text-[var(--foreground)] mb-12 leading-relaxed">
        i&apos;m hrushikesh — an ai developer at te connectivity in bengaluru. i
        spent nearly 4 years in .net and react, then made the jump to building
        llm-powered systems. i like shipping things that work in production, not
        just in demos.
      </p>

      {/* Principles */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-[var(--heading)]">
          <span className="text-accent mr-2">*</span> first principles
        </h2>
        <div className="space-y-6">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="text-[var(--heading)] font-semibold mb-1">
                {p.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Books */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-[var(--heading)]">
          <span className="text-accent mr-2">*</span> books
        </h2>
        <p className="text-[var(--muted)] mb-8 leading-relaxed">
          i read a mixed variety — ai papers one day, stoic philosophy the next.
          here are the ones that shaped how i think and work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {bookCategories.map((category) => (
            <div key={category.label}>
              <h3 className="text-sm font-semibold text-accent mb-3">
                {category.label}
              </h3>
              <ul className="space-y-2">
                {category.books.map((book) => (
                  <li key={book.title}>
                    <span className="text-[var(--heading)]">{book.title}</span>
                    <span className="text-[var(--muted)] text-sm">
                      {" "}
                      — {book.author}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Currently */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-[var(--heading)]">
          <span className="text-accent mr-2">*</span> currently exploring
        </h2>
        <ul className="space-y-2 text-[var(--foreground)]">
          {currentlyReading.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">-</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: "About",
  description:
    "Books, principles, and what I'm currently exploring.",
  openGraph: {
    images: [
      {
        url: "https://hrushiyadav.com/og/home?title=about",
      },
    ],
  },
}
