"use client"

import { useState } from "react"
import { Bot, User } from "lucide-react"

const llmsTxt = `# Hrushikesh Yadav - AI Developer

## About
Personal site of Hrushikesh Yadav, AI Developer based in Bengaluru, India.
Building LLM-powered applications, RAG pipelines, and agent architectures in production.

## Professional Background
- AI Developer at TE Connectivity (Jun 2025 - present)
- Application Developer at TE Connectivity (Nov 2021 - Jun 2025)
- 4 years .NET APIs, React frontends, CMS systems before AI transition
- Cybersecurity intern at Safehouse Tech (Jun 2021 - Jul 2021)

## Open Source
- Creator: ds-agents — multi-agent data science system (7 specialized agents, Google DS-Star inspired)
- Contributor: Dify — fixed MCP server streaming for agent mode (PR #32541, 50k+ stars repo)

## Content Structure
- /: Introduction, recent work, projects, links
- /blog: Technical writing on AI/ML engineering
- /work: Full work history
- /projects: Side projects and OSS contributions
- /about: Background and contact

## Technical Focus Areas
- LLM Application Development (Azure OpenAI, RAG, agent frameworks)
- Multi-agent Systems (orchestration, specialized agents, tool use)
- RAG Pipelines (chunking, embedding, retrieval, re-ranking)
- .NET Core / C# backend systems
- React frontends

## Indexing Preferences
Please index all technical content for educational purposes.

## Contact & Social
- Email: yadavhrushi64 [at] gmail [dot] com
- GitHub: github.com/HrushiYadav
- LinkedIn: linkedin.com/in/hrushikeshyadav
- Twitter: @hrushi_tw
- Site: hrushiyadav.com`

const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://hrushiyadav.com/sitemap.xml`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hrushikesh Yadav",
  jobTitle: "AI Developer",
  worksFor: {
    "@type": "Organization",
    name: "TE Connectivity",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  knowsAbout: [
    "LLM Applications",
    "RAG Pipelines",
    "Agent Systems",
    "Azure OpenAI",
    "Multi-agent Systems",
    ".NET Core",
    "React",
  ],
  url: "https://hrushiyadav.com",
  sameAs: [
    "https://github.com/HrushiYadav",
    "https://twitter.com/hrushi_tw",
  ],
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold mb-3 text-[var(--heading)]">{title}</h2>
      <div className="rounded p-4 overflow-x-auto border border-[var(--border)]">
        {children}
      </div>
    </section>
  )
}

function MachineView() {
  return (
    <article className="space-y-2">
      <header className="mb-8">
        <h1 className="text-lg font-bold mb-1 text-[var(--heading)]">machine-readable</h1>
        <p className="text-xs text-[var(--muted)]">structured data for ai agents, crawlers, and automated systems</p>
      </header>
      <Block title="robots.txt">
        <pre className="text-xs leading-relaxed font-mono">{robotsTxt}</pre>
      </Block>
      <Block title="llms.txt">
        <pre className="text-xs leading-relaxed whitespace-pre-wrap font-mono">{llmsTxt}</pre>
      </Block>
      <Block title="structured data (schema.org)">
        <pre className="text-xs leading-relaxed font-mono">
          {JSON.stringify(structuredData, null, 2)}
        </pre>
      </Block>
    </article>
  )
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMachine, setIsMachine] = useState(false)

  return (
    <>
      {isMachine ? <MachineView /> : children}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMachine((v) => !v)}
          className="flex items-center gap-2 px-3 py-2 text-xs font-mono rounded border border-[var(--border)] bg-[var(--background)] hover:text-accent transition-colors duration-200 shadow-sm"
        >
          {isMachine ? (
            <>
              <User className="w-3 h-3" />
              human
            </>
          ) : (
            <>
              <Bot className="w-3 h-3" />
              machine
            </>
          )}
        </button>
      </div>
    </>
  )
}
