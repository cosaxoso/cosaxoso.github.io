import { Outlet, Link } from "react-router"
import { Home, Laptop, PenTool } from "lucide-react"
import { Dock, DockIcon } from "@/components/ui/dock"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { TooltipProvider } from "./components/ui/tooltip"

export default function Layout() {
  return (
    <div className="relative min-h-dvh">
      <div className="fixed right-4 top-4 z-50">
        <AnimatedThemeToggler />
      </div>

      <div className="pb-28">
        <Outlet />
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center">
        <TooltipProvider>
            <Dock className="pointer-events-auto mt-0">
                <DockIcon label="Home">
                    <Link to="/" aria-label="Home"><Home /></Link>
                </DockIcon>
                <DockIcon label="Computer">
                    <Link to="/computer" aria-label="Computer"><Laptop /></Link>
                </DockIcon>
                <DockIcon label="Design">
                    <Link to="/design" aria-label="Design"><PenTool /></Link>
                </DockIcon>
            </Dock>
        </TooltipProvider>
      </div>
    </div>
  )
}