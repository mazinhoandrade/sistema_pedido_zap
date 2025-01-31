"use client";

import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/cart-store";
import { ProductDialog } from "./ProductDialog";
import { useContext, useState } from "react";


type Props = {
  item: Product;
};
export const ProductItem = ({ item }: Props) => {
  const [checkoutOpen , setCheckoutOpen] = useState(false);
  
  const handleAddButton = () => {
  // ver detalhes
    setCheckoutOpen(true)
  }

  return (
    <div className="mb-4">
      <div className="rounded-xl overflow-hidden">
        <img src={item.image}
         alt={item.name}
         className="w-full h-32 object-cover" 
         />
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">{item.name}</p>
        <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>

        <Button onClick={handleAddButton}>
            Ver detalhes
        </Button>
        <ProductDialog 
           item={item}
           open={checkoutOpen}
           onOpenChange={setCheckoutOpen}
        />
      </div>
 
    </div>
  );
};
