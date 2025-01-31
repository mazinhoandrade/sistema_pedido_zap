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
import {  useState } from "react";
import { CheckoutDialog } from "../checkout/CheckoutDialog";

export const CartSidebar = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  const { cart } = useCartStore((state) => state);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange} >

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        <Separator className="my-3" />

        <div className="flex justify-between items-center text-xs">
          <div>Subtotal:</div>
          <div>
            R${" "}
            {cart
              .reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              )
              .toFixed(2)}
          </div>
        </div>

        <Separator className="my-3" />

        <div className="flex justify-center">
          <Button
            onClick={() => setCheckoutOpen(true)}
            disabled={cart.length === 0}
          >
            Finalizar compra
          </Button>
        </div>

        <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
      </SheetContent>
    </Sheet>
  );
};
