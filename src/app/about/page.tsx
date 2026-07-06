import { ScrambleText } from "@/components/scramble-text"
import { Metadata } from "next"

const intro =
  "i'm hrushikesh, an ai architect at te connectivity, bengaluru. i spent 4 years building dotnet apis and react apps, then a sudden NL-to-SQL project sent me down the AI rabbit hole and i never came back. joined as an ai engineer, now ai architect. these days i build rag pipelines and agents at work, and own the other side of it too: proper sdlc practices and infra so agents run without breaking rules, eval standards, memory pocs. free time, i do oss contributions. i live on my terminal, with my new buddy claude code, though nowadays i'm also friends with opencode."

const howIWork = [
  {
    title: "run it locally",
    description:
      "i don't trust my understanding until i've broken something. i learned to code by reverse engineering a pubg hack script, got banned on two accounts figuring it out. same instinct now: i read mem0's code because a filter was behaving weirdly, not because a tutorial told me to.",
  },
  {
    title: "nothing is wasted",
    description:
      "4 years of fullstack development taught me how software actually works. i've replaced 20+ logic apps with a single centralized api, load tested with jmeter, shipped react apps people actually use. i've worked on 15+ projects that are in production: few i built from scratch, few i joined later, few i was the guy who handled them when anything went wrong. that's why my agents run in enterprise environments and not just in my terminal.",
  },
]

const whyIWrite =
  "i write blogs about things i read or learn. i've written many but only released a few, because my understanding on that concept wasn't concrete yet. every post that's live cleared that bar. my blogs are a digital representation of my thinking, it's my place on the internet."

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
        {intro}
      </p>

      {/* How I work */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-[var(--heading)]">
          <span className="text-accent mr-2">*</span> how i work
        </h2>
        <div className="space-y-6">
          {howIWork.map((p) => (
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

      {/* Why I write */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-[var(--heading)]">
          <span className="text-accent mr-2">*</span> why i write
        </h2>
        <p className="text-[var(--muted)] leading-relaxed">{whyIWrite}</p>
      </section>

      {/* Books */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-[var(--heading)]">
          <span className="text-accent mr-2">*</span> books
        </h2>
        <p className="text-[var(--muted)] mb-8 leading-relaxed">
          i read a mixed variety: ai papers one day, stoic philosophy the next.
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
                      {", "}
                      {book.author}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Currently */}
      {/* <section className="mb-16">
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
      </section> */}
    </main>
  )
}

export const metadata: Metadata = {
  title: "About",
  description:
    "Books, principles, and what I'm currently exploring.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    images: [
      {
        url: "https://hrushiyadav.com/og/home?title=about",
      },
    ],
  },
}
