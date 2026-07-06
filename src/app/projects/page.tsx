import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "ragguard",
    description:
      "static security scanner for rag pipelines — detects injection, hardcoded secrets, auth gaps, ssrf, and more in python codebases",
    role: "creator",
    period: "jun 2026",
    achievements: [
      "11 scanners: filter injection, nosql/sql injection, hardcoded secrets, ssrf, command injection, insecure deserialization, tls, auth gaps, secret logging, resource safety",
      "published on pypi as ragsec — pip install ragsec",
      "400+ downloads in the first weeks, zero promotion",
      "html + markdown report generation with severity badges and remediation guidance",
    ],
    technologies: [
      "python",
      "click",
      "jinja2",
      "rich",
    ],
    href: "https://github.com/HrushiYadav/ragGuard",
    storyHref: "/blog/ragsec-birth",
  },
  {
    title: "mem0 — ai memory layer contributions",
    description:
      "fixing critical bugs across the python and typescript sdks for mem0, an open source ai memory layer with 51k+ stars",
    role: "contributor",
    period: "jun 2026 - present",
    achievements: [
      "36 merged prs across every vector store backend: chromadb, pgvector, pinecone, mongodb, weaviate, milvus, redis, elasticsearch, azure ai search, databricks, neptune, upstash",
      "llm provider fixes: anthropic, bedrock, litellm, gemini, ollama",
      "async memory and the server layer, each with targeted regression tests",
    ],
    technologies: ["python", "typescript", "chromadb", "pgvector", "fastapi", "pytest"],
    href: "https://github.com/mem0ai/mem0/pulls?q=author:HrushiYadav",
  },
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
    title: "open source contributions — ray, agno, open-webui, opencode",
    description:
      "fixes and features shipped across the ai infra and tooling i use day to day",
    role: "contributor",
    period: "2026",
    achievements: [
      "agno: fix shipped in v2.6.10",
      "open-webui: merged pr",
      "ray: serve pr bounding router retry loops (in review)",
    ],
    technologies: ["python", "typescript"],
    href: "https://github.com/HrushiYadav",
  },
  {
    title: "argocd-gitops",
    description:
      "gitops kubernetes deployment with argocd — app of apps pattern, applicationsets, helm charts on a kind local cluster",
    role: "creator",
    period: "jun 2026",
    achievements: [
      "app of apps pattern with applicationsets for multi-app deployment",
      "helm chart templating with environment-specific value overrides",
      "kind local cluster setup with full gitops workflow",
    ],
    technologies: [
      "kubernetes",
      "argocd",
      "helm",
      "kind",
      "shell",
    ],
    href: "https://github.com/HrushiYadav/argocd-gitops",
  },
  {
    title: "talkwithdoc",
    description:
      "rag application — upload pdfs, pptx, images and chat with them using azure ai search + openai",
    role: "creator",
    period: "apr 2025",
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
    period: "apr 2025",
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
    period: "jan 2026",
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
        some things i&apos;ve built, and tools i use that i&apos;ve fixed.
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
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    images: [
      {
        url: "https://hrushiyadav.com/og/home?title=projects",
      },
    ],
  },
}
