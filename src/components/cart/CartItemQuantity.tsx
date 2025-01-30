import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Cart } from "@/types/cart";
import { useCartStore } from "@/stores/cart-store";

type Props = {
    cartItem: Cart;
}
export const CartItemQuantity = ({ cartItem }: Props) => {

    const { upsertCartItem } = useCartStore(state => state)
    
    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, + 1)
    }
    
    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, - 1)
    }

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
                <Button onClick={handleMinusButton} size="icon" variant="outline">          
                    <Minus />
                </Button>
                <div className="text-sm font-semibold ">{cartItem.quantity}</div>
                <Button onClick={handlePlusButton} size="icon" variant="outline">          
                    <Plus />
                </Button> 
            </div>
        </div>
    );
};