import Link from "next/link"

const links = [
  { title: "email", href: "mailto:yadavhrushi64@gmail.com" },
  { title: "x.com", href: "https://x.com/hrushi_tw" },
  { title: "github", href: "https://github.com/HrushiYadav" },
  { title: "linkedin", href: "https://www.linkedin.com/in/hrushikeshyadav" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-[var(--heading)]">
        <span className="text-accent mr-2">*</span> links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-[var(--muted)] hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
