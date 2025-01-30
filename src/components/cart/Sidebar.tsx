
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Car, Rocket } from "lucide-react";
import { Separator } from "@/components/ui/separator";


import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "@/components/cart/CartItem";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/CheckoutDialog";

export const CartSidebar = () => {
  const { cart } = useCartStore(state => state);
  const [checkoutOpen , setCheckoutOpen] = useState(false)
 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <Rocket className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <span className="absolute size-3 -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
              {cart.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-5 my-3">
            {cart.map(item => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <Separator className="my-3" />
          
          <div className="flex justify-between items-center text-xs">
            <div>Subtotal:</div>
            <div>R$ {cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)}</div>
          </div>

          <Separator className="my-3" />

          <div className="flex justify-center">
            <Button
               onClick={() => setCheckoutOpen(true)} 
               disabled={cart.length === 0}
            >Finalizar compra</Button>
          </div>

          <CheckoutDialog 
          open={checkoutOpen}
          onOpenChange={setCheckoutOpen}
        />
        
      </SheetContent>
    </Sheet>
  );
};
