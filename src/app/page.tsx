import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { AboutSection } from "@/components/about-section"
import { LinksSection } from "@/components/links-section"
import { workItems } from "@/lib/work-items"

const featuredWorkItems: Item[] = workItems.slice(0, 2)

const projectItems = [
  {
    title: "ds-agents",
    role: "creator",
    description:
      "multi-agent data science system inspired by google's ds-star research. 7 specialized agents for automated analysis",
    href: "https://github.com/HrushiYadav/ds-agents",
  },
  {
    title: "dify — mcp server fix",
    role: "contributor",
    description:
      "fixed mcp server streaming for agent mode in dify (50k+ stars). pr #32541",
    href: "https://github.com/langgenius/dify/pull/32541",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <BlogSection />
      <SectionList
        title="work"
        items={featuredWorkItems}
        viewAllHref="/work"
        viewAllText="all work"
      />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <AboutSection />
      <LinksSection />
    </>
  )
}
