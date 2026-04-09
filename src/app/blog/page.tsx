import { ScrambleText } from "@/components/scramble-text"
import { Posts } from "@/components/posts"
import { getPublishedPosts } from "@/lib/blog"
import { Metadata } from "next"

const posts = getPublishedPosts().sort(
  (a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
)

export default async function BlogPage() {
  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-8 text-[var(--heading)]">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="blog" />
      </h1>

      <p className="hidden sm:block text-sm text-[var(--muted)] mb-8">
        press{" "}
        <kbd className="px-1 py-0.5 text-xs border border-[var(--border)] rounded">
          /
        </kbd>{" "}
        to search • use{" "}
        <kbd className="px-1 py-0.5 text-xs border border-[var(--border)] rounded">
          ctrl / ⌘ j
        </kbd>{" "}
        and{" "}
        <kbd className="px-1 py-0.5 text-xs border border-[var(--border)] rounded">
          ctrl / ⌘ k
        </kbd>{" "}
        or{" "}
        <kbd className="px-1 py-0.5 text-xs border border-[var(--border)] rounded">
          ↑
        </kbd>{" "}
        and{" "}
        <kbd className="px-1 py-0.5 text-xs border border-[var(--border)] rounded">
          ↓
        </kbd>{" "}
        to navigate
      </p>

      <Posts posts={posts} />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Writings on AI, search, and building things in production.",
  openGraph: {
    images: [
      {
        url: "https://hrushiyadav.com/og/home?title=blog",
      },
    ],
  },
}
