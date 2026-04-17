import { notFound } from "next/navigation"
import Link from "next/link"
import { MDX } from "./mdx"
import {
  getPostBySlug,
  getAdjacentPosts,
  getReadingTime,
  getPublishedPosts,
} from "@/lib/blog"
import { formatDateLong } from "@/lib/utils"
import type { Metadata } from "next"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const slug = (await params).slug
  const post = getPostBySlug(slug)
  if (!post) {
    return
  }

  const publishedTime = formatDateLong(post.metadata.date)

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      publishedTime,
      type: "article",
      url: `https://hrushiyadav.com/blog/${post.slug}`,
      images: [
        {
          url: `https://hrushiyadav.com/og/blog?title=${post.metadata.title}`,
        },
      ],
    },
    twitter: {
      title: post.metadata.title,
      description: post.metadata.description,
      card: "summary_large_image",
      creator: "@hrushi_tw",
      images: [
        `https://hrushiyadav.com/og/blog?title=${post.metadata.title}&top=${publishedTime}`,
      ],
    },
  }
}

export default async function Post({ params }: PageProps) {
  const slug = (await params).slug
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  const { prev, next } = getAdjacentPosts(slug)
  const readingTime = getReadingTime(post.content)

  return (
    <section className="animate-fade-in-up">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            image: `https://hrushiyadav.com/og/blog?title=${
              post.metadata.title
            }&top=${formatDateLong(post.metadata.date)}`,
            url: `https://hrushiyadav.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Hrushikesh Yadav",
            },
          }),
        }}
      />

      <div className="flex items-center justify-between mb-8">
        <Link
          href="/blog"
          className="text-sm text-[var(--muted)] hover:text-accent transition-colors duration-200"
        >
          &larr; back
        </Link>
      </div>

      {post.metadata.draft && (
        <div className="mb-6 px-4 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-sm text-yellow-500 text-sm">
          This post is a draft and is not listed publicly.
        </div>
      )}

      <h1 className="text-4xl font-semibold mb-4 text-[var(--heading)] text-balance">
        <span className="text-accent accent-glow mr-2">*</span>
        {post.metadata.title}
      </h1>

      <div className="mb-10 flex items-center gap-3 text-sm text-[var(--muted)]">
        <span>{formatDateLong(post.metadata.date)}</span>
        <span>&middot;</span>
        <span>{readingTime}</span>
      </div>

      <article className="prose dark:prose-invert max-w-none prose-headings:text-[var(--heading)] prose-a:text-[var(--heading)] hover:prose-a:underline prose-tuned-mono text-pretty">
        <MDX source={post.content} />
      </article>

      {(prev || next) && (
        <nav className="mt-16 border-t border-[var(--border)] pt-8 grid grid-cols-2 gap-4 text-sm">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              <span className="text-xs text-[var(--muted)] mb-1 block">
                previous
              </span>
              <span className="group-hover:text-accent transition-colors duration-200">
                &larr; {prev.metadata.title.toLowerCase()}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group text-right text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              <span className="text-xs text-[var(--muted)] mb-1 block">
                next
              </span>
              <span className="group-hover:text-accent transition-colors duration-200">
                {next.metadata.title.toLowerCase()} &rarr;
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </section>
  )
}
