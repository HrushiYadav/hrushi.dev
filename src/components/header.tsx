import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-[var(--heading)]">
        <span className="inline-block">
          <ScrambleText text="hrushikesh yadav" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-[var(--muted)]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          bengaluru, india
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          ai developer at te connectivity
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i spent nearly 4 years building .net apis, react frontends, and cms systems
        — then made the jump to ai. now i build llm-powered applications, rag
        pipelines, and agent systems that run in real enterprise environments,
        not just demos.
      </p>
    </header>
  )
}
