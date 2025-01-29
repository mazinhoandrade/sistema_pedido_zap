import { Logo } from "@/components/logo"
import { ThemeToggle } from "./theme-toggle"
import { CartSidebar } from "./cart/sidebar"

export const Header = () => {
    return (
        <header className="flex h-auto w-full items-center justify-between my-5 px-5">
            <div className="flex items-center gap-2">
                <Logo />
                <ThemeToggle/> 
            </div>
            <div className="flex items-center gap-2">
                <CartSidebar />
            </div>
        </header>
    )
}