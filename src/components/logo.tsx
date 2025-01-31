import { Pizza } from "lucide-react"

export const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-zinc-100 p-4">
            <Pizza className="text-black" />
            </div>
            <div className="font-bold text-xl">
                Pizza Zap
            </div>
        </div>
    )
                    
}