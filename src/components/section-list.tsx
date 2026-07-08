import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export type Item = {
  title: string
  href: string
  role: string
  period?: string
  description: string
}

type SectionListProps = {
  title: string
  items: Item[]
  viewAllHref?: string
  viewAllText?: string
  showTitle?: boolean
  showSectionBorder?: boolean
}

export function SectionList({
  title,
  items,
  viewAllHref,
  viewAllText,
  showTitle = true,
  showSectionBorder = true,
}: SectionListProps) {
  return (
    <section
      className={`mb-16 animate-fade-in-up ${
        showSectionBorder ? "pt-10 border-t border-[var(--border)]" : ""
      }`}
    >
      {showTitle && (
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center text-[var(--heading)]">
            <span className="text-accent accent-glow mr-2">*</span> {title}
          </h2>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
            >
              {viewAllText}{" "}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}
        </div>
      )}
      <div className="space-y-2">
        {items.map((item, index) => (
          <Link
            key={`${item.title}-${index}`}
            href={item.href}
            target="_blank"
            className="group block rounded-lg p-4 -mx-4 transition-colors hover:bg-[var(--border)]/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[var(--heading)] group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mt-1">
                  {item.role}
                  {item.period && <span> · {item.period}</span>}
                </p>
                <p className="text-[var(--foreground)] mt-2 text-pretty">
                  {item.description}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 mt-1.5 text-[var(--muted)] group-hover:text-accent transition-colors shrink-0" />
            </div>
          </Link>
        ))}
      </div>
      {viewAllHref && !showTitle && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 mt-6 text-accent hover:underline group"
        >
          {viewAllText}{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      )}
    </section>
  )
}
