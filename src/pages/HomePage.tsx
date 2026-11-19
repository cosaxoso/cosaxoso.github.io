import { Link } from "react-router"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Marquee } from "@/components/ui/marquee"
import SiteBackground from "@/components/SiteBackground"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"

// Wide, left-aligned page container. Grows with the screen, then stops at 6xl.
const container = "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12"

// On large screens: label in the left column, content on the right.
const row = "lg:grid lg:grid-cols-12 lg:gap-10"

const now = [
  {
    where: "Northeastern University, Boston",
    what: "Studying Computer Science and Design, exploring the relationship between technology, creativity, and people.",
    when: "Currently",
  },
  {
    where: "Oakland, California",
    what: "Started my college journey in the Bay Area, surrounded by a dynamic mix of cultures, artistic expression, and diverse perspectives.",
    when: "2023-2024",
  },
  {
    where: "Queens, New York",
    what: "Spent my teenage years in one of the most culturally diverse places in the world, surrounded by different languages, cuisines, communities, and perspectives.",
    when: "2015-2023",
  },
  {
    where: "Dharamshala, India",
    what: "Where my Tibetan roots took shape. Grew up surrounded by Tibetan traditions, language, and a community that kept our culture alive far from home.",
    when: "2004-2015",
  },
]

const tools = ["TypeScript", "React", "Laravel", "Python", "Java", "Kotlin", "Figma", "Illustrator", "Photoshop"]

const firstRow = projects.slice(0, Math.ceil(projects.length / 2))
const secondRow = projects.slice(Math.ceil(projects.length / 2))

function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60 sm:text-base lg:col-span-3 lg:mb-0 lg:pt-0.5 lg:text-lg",
        className
      )}
    >
      {children}
    </h2>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      aria-label={`View ${project.name}`}
      className={cn(
        "group relative flex h-full w-64 flex-col justify-between overflow-hidden rounded-2xl border p-5 text-left sm:w-80 sm:p-6",
        "border-black/10 bg-white/55 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/80",
        "dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      )}
    >
      {/* soft accent glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100",
          project.accent
        )}
      />
      <div className="relative">
        <p className="text-xs font-medium text-foreground/50">
          {project.tag} · {project.year}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{project.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/70">{project.blurb}</p>
      </div>
      <div className="relative mt-6 flex items-center justify-between gap-3 text-xs">
        <span className="truncate text-foreground/50">{project.stack.join("  ·  ")}</span>
        <span className="shrink-0 font-medium text-foreground/80 transition-transform group-hover:translate-x-0.5">
          View →
        </span>
      </div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <>
      <SiteBackground />

      {/* text-left + w-full guard against global centering (e.g. Vite's default CSS) */}
      <main className="relative z-10 w-full min-w-0 max-w-full overflow-x-clip text-left">
        {/* Hero */}
        <section className={cn(container, "flex min-h-[75svh] flex-col items-start justify-center py-12")}>
        <h1 className="font-special-section text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            <TypingAnimation typeSpeed={150} pauseDelay={2000} startOnView>
              Hi! I'm Tenzin 👋
            </TypingAnimation>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl lg:text-2xl">
            I'm currently studying  Computer Science and Design at Northeastern. I like building things that
            work well and feel good to use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <InteractiveHoverButton
                  onClick={() => {
                    window.location.href = "mailto:choezomtenzin4@gmail.com"
                  }}
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
                Say hello
            </InteractiveHoverButton>
            {/* <a
              href="#work"
              className="text-sm font-medium text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              See what I've made ↓
            </a> */}
          </div>
        </section>


        {/* Context */}
        <section className={cn(container, row, "pb-20 sm:pb-28")}>
          <SectionLabel>My Roots & Routes</SectionLabel>
          <ul className="divide-y divide-foreground/10 lg:col-span-9">
            {now.map((item) => (
              <li
                key={item.where}
                className="flex flex-col gap-1 py-5 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 lg:first:pt-1"
              >
                <div>
                  <p className="font-medium lg:text-lg">{item.where}</p>
                  <p className="text-sm text-foreground/60 lg:text-base">{item.what}</p>
                </div>
                <p className="text-sm tabular-nums text-foreground/40">{item.when}</p>
              </li>
            ))}
          </ul>
        </section>
        
        {/* Coding work: full-bleed marquee */}
        <section id="CodingProjects" className="scroll-mt-10 pb-20 sm:pb-28">
          <div className={container}>
            <SectionLabel>Coding Projects</SectionLabel>
          </div>
          <div
                className="w-full"
                style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                }}
            >
                <Marquee pauseOnHover className="[--duration:35s] [--gap:1rem]">
                {firstRow.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
                </Marquee>
            </div>
        </section>

        {/* Selected work: full-bleed marquee */}
        <section id="DesignWork" className="scroll-mt-10 pb-20 sm:pb-28">
          <div className={container}>
            <SectionLabel>Design Projects</SectionLabel>
          </div>
          <div
                className="w-full"
                style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                }}
          >
            <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:1rem]">
              {secondRow.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </Marquee>
          </div>
        </section>

        {/* Tools */}
        <section className={cn(container, "pb-20 sm:pb-28")}>
          <SectionLabel className="lg:mb-6">What I use</SectionLabel>
          <p className="max-w-4xl text-xl leading-relaxed text-foreground/80 sm:text-2xl lg:text-3xl">
            {tools.map((t, i) => (
              <span key={t}>
                {t}
                {i < tools.length - 1 && <span className="mx-2 text-foreground/25">/</span>}
              </span>
            ))}
          </p>
        </section>

        {/* Footer */}
        <footer className={cn(container, "border-t border-foreground/10 py-12 sm:py-16")}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <p className="font-special-section text-3xl sm:text-4xl lg:text-5xl">Let's make something.</p>
            <a
              href="mailto:choezomtenzin4@gmail.com"
              className="text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
            >
              choezomtenzin4@gmail.com
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}