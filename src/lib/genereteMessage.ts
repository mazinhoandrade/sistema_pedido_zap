import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store"

export const genereteMessage = () => {
    const { name, phone, address } = useCheckoutStore(state => state);
    const { cart } = useCartStore(state => state);
    let ordeProducts = [];
    for(let item of cart) {
        ordeProducts.push(`${item.quantity} x ${item.product.name} - ${item.messagem? 'Obs: '+item.messagem : ''}`);
    }
    return `** Dados do cliente **
Nome: ${name}
Telefone: ${phone}
Endereço: ${address.street}, ${address.number}, ${address.complement}, ${address.district}
--------------------------------------
** Pedido: **
${ordeProducts.join("\n")}`;

}