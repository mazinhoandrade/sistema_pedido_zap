import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/cart-store";
import { Product } from "@/types/product";


import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
    item: Product;
    onOpenChange: (open: boolean) => void;
  };
export const ProductDialogItem = ({ item, onOpenChange }: Props) => {
  const { toast } = useToast();
  const { cart, upsertCartItem,  } = useCartStore((state) => state);


  let quantity = 0;
  let message = '';
  if (cart.length > 0) {
    message = cart.find((cartItem) => cartItem.product.id === item.id)?.messagem || '';
    quantity =
      cart.find((cartItem) => cartItem.product.id === item.id)?.quantity ||
      (0 as number);
  }

  const [productQuantity, setProductQuantity] = useState(quantity);
  const [msg, setMsg] = useState<string>(message);


  useEffect(() => {
    setProductQuantity(quantity);
  }, [quantity]);

  const handleAddButton = () => { 
    // todo adicionar ao carrinho
    if (productQuantity >= 1) {
      toast({
        title: "Adicionado ao carrinho",
        description: item.name,
      });
    }
    upsertCartItem(item, productQuantity-quantity, msg);
    //updateMessage(item, msg);
    onOpenChange(false);
  };

  const handlePlusButton = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleMinusButton = () => {
    if (productQuantity < 1) return;
    setProductQuantity(productQuantity - 1);
  };

  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1 grid content-between mx-2">
        <div className="w-full text-sm">{item.details}</div>
        <div className="w-full">
          <Textarea placeholder="Observações Ex: Sem molho" value={msg} onChange={(e) => setMsg(e.target.value)} />
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2">
            <Button onClick={handleMinusButton} size="icon" variant="outline">
              <Minus />
            </Button>
            <div className="text-sm font-semibold ">{productQuantity}</div>
            <Button onClick={handlePlusButton} size="icon" variant="outline">
              <Plus />
            </Button>
          </div>
          <Button onClick={handleAddButton}>
            R$ {item.price * productQuantity} Adicionar
          </Button>
         
        </div>
      </div>
    </div>
    // <div className="flex items-center gap-2 ">
    //   <Button
    //     variant="outline"
    //     onClick={handleAddButton}
    // >Adicionar</Button>
    // </div>
  );
};
