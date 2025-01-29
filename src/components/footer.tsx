import { Separator } from "./ui/separator"

export const Footer = () => {
    return (
        <footer className="mt-4">
            <Separator />
            <div className="text-sm my-5 text-center">
                &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </div>
        </footer>
    )
}