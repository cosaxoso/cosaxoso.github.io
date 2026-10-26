import { TypingAnimation } from "@/components/ui/typing-animation"
// import { Meteors } from "@/components/ui/meteors"
import Particles from "@/components/Particles"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
        <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
            <Particles
                particleColors={["#f4ff8a","#c6ff6b","#ffe28a"]}
                particleCount={260}
                particleSpread={10}
                speed={0.25}
                particleBaseSize={170}
                glow={1.6}
                twinkle={0.9}
                moveParticlesOnHover
                hoverEffect="parallax"
                sizeRandomness={0.8}
                drift="up"
                driftSpeed={0.6}   
            />
        </div>
        {/* <Meteors>
        </Meteors> */}
      <h1 className="text-4xl font-bold">
        <TypingAnimation>Hi, I'm Tenzin Choezom 👋</TypingAnimation>
      </h1>
      <p className="mt-4 text-muted-foreground">Developer, designer, thinker.</p>
    </main>
  )
}