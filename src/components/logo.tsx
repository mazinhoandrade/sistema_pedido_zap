
export const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-100 p-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="font-bold text-xl">
                Food Zap
            </div>
        </div>
    )
                    
}