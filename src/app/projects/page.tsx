import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "ds-agents",
    description:
      "multi-agent data science system inspired by google's ds-star research",
    role: "creator",
    period: "apr 2026 - present",
    achievements: [
      "7 specialized agents: analyzer, planner, coder, verifier, router, debugger, finalyzer",
      "langgraph orchestration with azure openai + openai dual provider support",
      "enterprise data format support — excel, sql exports, csvs",
    ],
    technologies: [
      "python",
      "langgraph",
      "azure openai",
      "streamlit",
      "docker",
    ],
    href: "https://github.com/HrushiYadav/ds-agents",
  },
  {
    title: "dify — mcp server streaming fix",
    description:
      "fixed mcp server tool streaming in agent mode for dify, a 50k+ star llm app platform",
    role: "contributor",
    period: "mar 2026",
    achievements: [
      "diagnosed and fixed streaming failure in mcp server tool calls during agent mode",
      "pr #32541 — under review by maintainers",
    ],
    technologies: ["python", "mcp", "sse"],
    href: "https://github.com/langgenius/dify/pull/32541",
  },
  {
    title: "talkwithdoc",
    description:
      "rag application — upload pdfs, pptx, images and chat with them using azure ai search + openai",
    role: "creator",
    period: "2025",
    achievements: [
      "full rag pipeline: upload → parse → chunk → embed → index → query → answer",
      "hybrid search with azure ai search (keyword + semantic + vector)",
      "ocr fallback for scanned documents and images",
    ],
    technologies: [
      "react",
      "express",
      "azure ai search",
      "azure openai",
      "langchain",
    ],
    href: "https://github.com/HrushiYadav/talkwithdoc",
  },
  {
    title: "search-playground",
    description:
      "side-by-side comparison of 4 search paradigms: lexical, fuzzy, phonetic, and semantic",
    role: "creator",
    period: "2025",
    achievements: [
      "demonstrates why different search types return different results for the same query",
      "elasticsearch for traditional search + chromadb for semantic search",
    ],
    technologies: [
      "react",
      "express",
      "elasticsearch",
      "chromadb",
      "python",
    ],
    href: "https://github.com/HrushiYadav/elastic-search",
  },
  {
    title: "win-rectangle",
    description:
      "windows window manager — keyboard-driven window snapping, resizing, and multi-monitor support",
    role: "creator",
    period: "2024",
    achievements: [
      "hotkey-driven window management with size cycling",
      "multi-monitor support with proper win32 interop",
      "system tray integration with restore history",
    ],
    technologies: ["c#", "wpf", "win32 api"],
    href: "https://github.com/HrushiYadav/win-rectangle",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-[var(--heading)]">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-[var(--muted)] mb-12 leading-relaxed">
        here are some of the projects and open source contributions i&apos;ve
        worked on. i like building things that solve real problems and
        contributing to tools i use.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and open source contributions by Hrushikesh Yadav.",
  openGraph: {
    images: [
      {
        url: "https://hrushiyadav.com/og/home?title=projects",
      },
    ],
  },
}
