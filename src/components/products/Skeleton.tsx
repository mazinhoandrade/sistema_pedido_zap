import { Skeleton } from "@/components/ui/skeleton"
export const ProductSkeleton = () => {
    return (
        <div className="">
            <Skeleton className="w-full h-10 rounded-xl" />

            <div className="mt-6 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {Array.from({ length: 6 }).map((item, index) => (
                    <div key={index} className="mb-4">
                        <Skeleton className="w-full h-32 rounded-xl" />
                        <Skeleton className="w-full h-8 rounded-xl mt-2" />
                        <Skeleton className="w-16 h-5 rounded-xl mt-2" />
                        <Skeleton className="w-full h-9 rounded-xl mt-2" />
                    </div>
                ))}
            </div>
        </div>
    )
}