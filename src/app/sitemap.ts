import { getPublishedPosts } from "@/lib/blog"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts().map((post) => ({
    url: `https://hrushiyadav.com/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const routes = ["", "/blog", "/work", "/projects", "/about"].map(
    (route) => ({
      url: `https://hrushiyadav.com${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  )

  return [...routes, ...posts]
}
