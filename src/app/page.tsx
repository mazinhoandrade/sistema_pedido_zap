import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductSkeleton } from '@/components/products/Skeleton'
import { ProductsTab } from '@/components/products/Tab'

import { Suspense } from 'react'



const Page = () => {
  return (  
    <div className='w-full max-w-4xl mx-auto'>
       <Header/>
         <div className='mx-3'>
           <Suspense fallback={<ProductSkeleton/>}>
              <ProductsTab/>
           </Suspense>
         </div>
       <Footer/>
    </div>
  )
}

export default Page