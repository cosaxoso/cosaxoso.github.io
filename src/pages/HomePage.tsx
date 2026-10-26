import { TypingAnimation } from "@/components/ui/typing-animation"
import { Meteors } from "@/components/ui/meteors"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
        <Meteors>
            
        </Meteors>
      <h1 className="text-4xl font-bold">
        <TypingAnimation>Hi, I'm Tenzin Choezom 👋</TypingAnimation>
      </h1>
      <p className="mt-4 text-muted-foreground">Developer, designer, thinker.</p>
    </main>
  )
}