import { Product } from "@/types/product";

import { products } from "@/data/products";



export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve, rejects)=> {
        return setTimeout(()=>{
            resolve(products);
        }, 2000)
    })
}