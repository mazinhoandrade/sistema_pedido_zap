"use client"

import { Car, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/stores/cart-store";
import { CartSidebar } from "@/components/cart/Sidebar";
import { useState } from "react";


export const ButtonOpen = () => {
    const { cart } = useCartStore((state) => state);
    const [open, setOpen] = useState(false);

    return (
        <>
        <Button 
        disabled={cart.length === 0}
        onClick={() => setOpen(true)} className="relative">
        <Rocket className="mr-2" />
        <p>Carrinho</p>
        {cart.length > 0 && (
          <span className="absolute size-3 -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
            {cart.length}
          </span>
        )}
      </Button>
      {cart.length > 0 && (
          <CartSidebar open={open} onOpenChange={setOpen} />
      )}
      </>
    )
}