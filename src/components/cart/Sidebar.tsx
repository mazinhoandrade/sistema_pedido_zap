import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CartSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Rocket className="mr-2" />
          <p>Carrinho</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          <div className="flex flex-col gap-5 my-3">...</div>
          <Separator className="my-3" />
          <div className="flex justify-between items-center text-xs">
            <div>Subtotal:</div>
            <div>R$ 0,00</div>
          </div>
          <Separator className="my-3" />
          <div className="flex justify-center">
            <Button>Finalizar compra</Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
