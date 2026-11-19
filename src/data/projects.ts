export type Project = {
    slug: string
    name: string
    tag: string
    year: string
    role: string
    blurb: string
    overview: string
    highlights: string[]
    stack: string[]
    /** Tailwind gradient classes used for the card + detail-page accent */
    accent: string
    /** true = dummy content to replace with your real project */
    placeholder?: boolean
  }
  
  export const projects: Project[] = [
    {
      slug: "trabgo",
      name: "TrabGo",
      tag: "GTPN Hackathon",
      year: "2026",
      role: "Developer",
      blurb:
        "A community home for Gorshey dance videos. Browse, submit, and like clips, with search, sorting, and like-based ranking.",
      overview:
        "TrabGo is a community platform built at the GTPN Hackathon for sharing and discovering Gorshey dance videos. People can browse the feed, submit their own videos, and like the ones they enjoy.",
      highlights: [
        "Supabase-backed authentication so people can sign in and submit videos.",
        "Search and sort feeds to make it easy to find videos.",
        "Like-based ranking that surfaces the community's favorites.",
      ],
      stack: ["React", "Supabase", "TypeScript"],
      accent: "from-amber-300/70 to-rose-300/50",
    },
    {
      slug: "ticketing-app",
      name: "Support Ticketing App",
      tag: "Tibetan Computer Resource Center",
      year: "2025",
      role: "Computer Engineer Intern",
      blurb:
        "A full-stack tool that lets a whole organization file, assign, and track internal support requests from any device.",
      overview:
        "The center's old ticketing system had become outdated, so I worked with staff to understand what they needed and turned those requirements into a new full-stack application. It replaced the old system and is now used to manage and track internal support requests.",
      highlights: [
        "Full CRUD: ticket creation, status updates, request assignment, and deletion.",
        "Migrated data from the older, unsupported system into the new MySQL database, preserving past records.",
        "Deployed to a production server and set up hosting.",
        "Wrote documentation and trained staff so the team could maintain it after my internship.",
        "Responsive interface that works across screen sizes.",
      ],
      stack: ["Laravel", "React", "MySQL"],
      accent: "from-sky-300/70 to-indigo-300/50",
    },
    {
      slug: "project-three",
      name: "Project Three",
      tag: "Coming soon",
      year: "2026",
      role: "Designer & Developer",
      blurb: "Placeholder project. Swap in a real description of what you built and why it matters.",
      overview:
        "This is dummy content. Replace it with a short story: the problem, what you built, and what you learned.",
      highlights: [
        "Add a result or outcome you're proud of.",
        "Mention a technical or design challenge you solved.",
        "Link to a live demo or repo when it's ready.",
      ],
      stack: ["Figma", "React"],
      accent: "from-emerald-300/70 to-teal-300/50",
      placeholder: true,
    },
    {
      slug: "project-four",
      name: "Project Four",
      tag: "Coming soon",
      year: "2026",
      role: "Developer",
      blurb: "Another placeholder. Great spot for a class project, a side project, or a design case study.",
      overview:
        "This is dummy content. Replace it with the real details of your project.",
      highlights: [
        "Describe what it does in one sentence.",
        "Call out the tools you used.",
        "Add screenshots or a demo video.",
      ],
      stack: ["Python", "Java"],
      accent: "from-violet-300/70 to-fuchsia-300/50",
      placeholder: true,
    },
    {
      slug: "project-five",
      name: "Project Five",
      tag: "Coming soon",
      year: "2025",
      role: "Designer",
      blurb: "A placeholder for a design-focused piece, like a brand, poster series, or app prototype.",
      overview:
        "This is dummy content. Replace it with the real details of your project.",
      highlights: [
        "Explain your design process.",
        "Show before-and-after or key iterations.",
        "Share what you'd do differently.",
      ],
      stack: ["Illustrator", "Photoshop"],
      accent: "from-orange-300/70 to-yellow-300/50",
      placeholder: true,
    },
    {
      slug: "project-six",
      name: "Project Six",
      tag: "Coming soon",
      year: "2025",
      role: "Developer",
      blurb: "One more placeholder so the marquee has enough cards to scroll smoothly.",
      overview:
        "This is dummy content. Replace it with the real details of your project.",
      highlights: [
        "What problem did it solve?",
        "Who was it for?",
        "What did you learn?",
      ],
      stack: ["Kotlin"],
      accent: "from-pink-300/70 to-red-300/50",
      placeholder: true,
    },
  ]
  
  export const getProject = (slug: string | undefined) =>
    projects.find((p) => p.slug === slug)