import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
    return (
        <header className="flex h-auto w-full items-center justify-between my-5 mx-3">
            
            <div className="flex items-center gap-2">
                <Logo />
                <ThemeToggle/> 
            </div>
            <div className="flex items-center gap-2">...</div>
            
          

        </header>
    )
}