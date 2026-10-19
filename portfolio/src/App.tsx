import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import CS from "@/pages/CS"
import Design from "@/pages/Design"
import About from "@/pages/About"
import {AnimatedThemeToggler} from "@/components/ui/animated-theme-toggler"
import {StaggeredMenu} from "@/components/StaggeredMenu";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'CS', ariaLabel: 'Learn about us', link: '/cs' },
  { label: 'Design', ariaLabel: 'View our services', link: '/design' },
  { label: 'About', ariaLabel: 'Get in touch', link: '/about' }
];

const socialItems = [
  // { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com/cosaxoso' },
  { label: 'LinkedIn', link: 'www.linkedin.com/in/tenzinchoezom' }
];

export default function App() {
  return (
    <HashRouter>
    <StaggeredMenu
      position="left"
      isFixed
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      changeMenuColorOnOpen
      colors={["#B497CF", "#5227FF"]}
      accentColor="#5227FF"
    />

  <div className="fixed right-4 top-4 z-[100] text-foreground sm:right-8">
    <AnimatedThemeToggler className="text-foreground" />
  </div>

  <div className="min-h-screen w-full bg-background text-foreground">
    <div className="px-6 pt-24 sm:px-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />      
      </Routes>
    </div>
  </div>
</HashRouter>

  )
}
