import { TypingAnimation } from "../components/ui/typing-animation"

export default function Home() {
    return (
      <main>
        {/*<h1>Tenzin Choezom</h1>
        <p>CS + Design student.</p>*/}
        <h1>
          <TypingAnimation>Tenzin Choezom 👋</TypingAnimation>
        </h1>
        <p>
          CS + Design student at Northeastern University.
        </p>
      </main>
    )
}
