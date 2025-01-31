import { Logo } from "@/components/Logo"
import { ThemeToggle } from "@/components/Theme-Toggle"
import { ButtonOpen } from "./cart/ButtonOpen"

export const Header = () => {
    return (
        <header className="flex h-auto w-full items-center justify-between my-5 px-5">
            <div className="flex items-center gap-2">
                <Logo />
                <ThemeToggle/> 
            </div>
            <div className="flex items-center gap-2">
                <ButtonOpen />
            </div>
        </header>
    )
}