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
          ai architect at te connectivity
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        25 y/o, ai architect at TE Connectivity, bengaluru. i like to reverse engineer things — i have to know why something behaves the way it does. off duty: gym, off-road rides, anime, games, sometimes football.
      </p>
    </header>
  )
}
