import { TypingAnimation } from "@/components/ui/typing-animation"
import Particles from "@/components/Particles"
import { useIsDark } from "@/hooks/useIsDark"

export default function HomePage() {
    const isDark = useIsDark()

  return (
    <main className=" mx-auto max-w-2xl px-6 py-24">
        <div className="fixed inset-0 -z-10 bg-[#C2C2C2] dark:bg-[#0b0f1a]">
            {isDark ? (
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
            ) : (

                <Particles
                    particleColors={["#ffffff","#ffffff","#ffffff"]}
                    particleCount={1400}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={55}
                    glow={0.2}
                    twinkle={0}
                    moveParticlesOnHover
                    hoverEffect="parallax"
                    sizeRandomness={1}
                    shape="circle"
                    depthOfField={0}
                    connections={false}
                    connectionDistance={110}
                    particleHoverFactor={1}
                    hoverRadius={140}
                    drift="down"
                    driftSpeed={0.8}
                    alphaParticles
                    disableRotation
                    cameraDistance={20}
                    variation={0}
                    opacity={1}
                    clickBurst
                    intro
                    lightMode={false}
                />
            )}
        </div>
      <h1 className="text-4xl font-bold">
        <TypingAnimation>Hi, I'm Tenzin Choezom 👋</TypingAnimation>
      </h1>
      <p className="mt-4 text-muted-foreground">Developer, designer, thinker.</p>
    </main>
  )
}