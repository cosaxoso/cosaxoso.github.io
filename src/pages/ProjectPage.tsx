import { useEffect } from "react"
import { Link, useParams } from "react-router"
import SiteBackground from "@/components/SiteBackground"
import { cn } from "@/lib/utils"
import { getProject, projects } from "@/data/projects"

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12"
const row = "lg:grid lg:grid-cols-12 lg:gap-10"
const label =
  "mb-4 text-xs font-medium uppercase tracking-[0.25em] text-foreground/50 lg:col-span-3 lg:mb-0 lg:pt-1.5"

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <>
        <SiteBackground />
        <main className={cn(container, "flex min-h-svh w-full flex-col items-start justify-center py-20 text-left")}>
          <h1 className="font-special-section text-4xl sm:text-5xl">Project not found</h1>
          <p className="mt-4 text-foreground/70">That page doesn't exist (yet).</p>
          <Link to="/" className="mt-6 text-sm font-medium underline underline-offset-4">
            ← Back home
          </Link>
        </main>
      </>
    )
  }

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteBackground />

      <main className={cn(container, "w-full py-12 text-left sm:py-20")}>
        <Link
          to="/"
          className="inline-block text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          ← All work
        </Link>

        <header className="mt-10 sm:mt-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/50">
            {project.tag} · {project.year}
          </p>
          <h1 className="font-special-section mt-3 text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl lg:text-2xl">
            {project.blurb}
          </p>
        </header>

        {/* Accent banner: swap for a screenshot or demo later */}
        <div
          aria-hidden="true"
          className={cn(
            "mt-10 aspect-[4/3] w-full rounded-3xl border border-black/10 bg-gradient-to-br dark:border-white/10 sm:mt-14 sm:aspect-[16/9] lg:aspect-[21/9]",
            project.accent
          )}
        />

        <dl className={cn(row, "mt-12 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3 lg:mt-16")}>
          <div className="lg:col-span-3">
            <dt className="text-foreground/50">Role</dt>
            <dd className="mt-1 font-medium">{project.role}</dd>
          </div>
          <div className="lg:col-span-3">
            <dt className="text-foreground/50">Year</dt>
            <dd className="mt-1 font-medium">{project.year}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1 lg:col-span-6">
            <dt className="text-foreground/50">Built with</dt>
            <dd className="mt-1 font-medium">{project.stack.join(", ")}</dd>
          </div>
        </dl>

        <section className={cn(row, "mt-14 sm:mt-20")}>
          <h2 className={label}>Overview</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/80 lg:col-span-9 lg:text-xl">
            {project.overview}
          </p>
        </section>

        <section className={cn(row, "mt-12 sm:mt-16")}>
          <h2 className={label}>What I did</h2>
          <ul className="max-w-3xl divide-y divide-foreground/10 lg:col-span-9">
            {project.highlights.map((h) => (
              <li key={h} className="py-4 leading-relaxed text-foreground/80 first:pt-0 lg:text-lg lg:first:pt-1">
                {h}
              </li>
            ))}
          </ul>
        </section>

        <nav className="mt-16 border-t border-foreground/10 pt-8 sm:mt-24">
          <p className="text-xs text-foreground/50">Next project</p>
          <Link
            to={`/work/${next.slug}`}
            className="font-special-section mt-2 inline-block text-3xl transition-transform hover:translate-x-1 sm:text-4xl lg:text-5xl"
          >
            {next.name} →
          </Link>
        </nav>
      </main>
    </>
  )
}
