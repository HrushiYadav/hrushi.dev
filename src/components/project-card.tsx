import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  role: string
  period?: string
  achievements: string[]
  technologies: string[]
  href: string
  storyHref?: string
}

export function ProjectCard({
  title,
  description,
  role,
  period,
  achievements,
  technologies,
  href,
  storyHref,
}: ProjectCardProps) {
  return (
    <div className="group border border-[var(--border)] p-6 transition-colors hover:border-accent/50">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-[var(--heading)] group-hover:text-accent transition-colors">
            {title}
          </h2>
          <ArrowUpRight className="w-5 h-5 text-[var(--muted)] group-hover:text-accent transition-colors" />
        </div>
      </Link>

      <p className="text-sm text-[var(--muted)] mb-4">
        {role}
        {period && <span> · {period}</span>}
      </p>

      <p className="text-[var(--foreground)] mb-6">{description}</p>

      {storyHref && (
        <Link
          href={storyHref}
          className="inline-flex items-center gap-1 mb-6 text-accent hover:underline"
        >
          read the story →
        </Link>
      )}

      <div className="space-y-6">
        <div>
          <h3 className="text-[var(--heading)] font-semibold mb-2">achievements</h3>
          <ul className="list-disc list-inside space-y-1 text-[var(--muted)]">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[var(--heading)] font-semibold mb-2">technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-[var(--muted)] bg-[var(--border)]/60 rounded-full"
              >
                {tech.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
