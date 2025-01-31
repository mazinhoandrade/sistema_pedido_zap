import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { genereteMessage } from "@/lib/genereteMessage";
import { StepsCheckout } from "@/types/stepCheckout";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<StepsCheckout>>;
  onOpenChange: (open: boolean) => void;
};

export const StepFinish = ({ setStep, onOpenChange }: Props) => {
  const { name, address, resetCheckout } = useCheckoutStore((state) => state);
  const { cart, resetCart } = useCartStore((state) => state);

  const message = genereteMessage();
  let linkZap = `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(
    message
  )}`;
  const handleWhatsApp = () => {
    return setTimeout(() => {
      resetCart();
      resetCheckout();
      onOpenChange(false);
    }, 500);
  };
  console.log(address);
  return (
    <div className="text-sm text-center flex flex-col gap-2">
      <p>
        Falta um pouco <strong>{name}</strong>!
      </p>
      <p className="border-b pb-1">
        Seu pedido chegara em{" "}
        {`${address.street}, ${address.number}, ${address.district}`}
      </p>
      <div className="border-b pb-1">
        Produtos:
        <ul>
          {cart.map((item) => (
            <li key={item.product.id}>
              {item.product.name}{" "}
              {`${item.messagem ? "Obs: " + item.messagem : ""}`}
            </li>
          ))}
        </ul>
      </div>
      <p>
        Valor total: R${" "}
        {cart
          .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
          .toFixed(2)}
      </p>

      <Separator />
      <p>
        Agora envie seu pedido ao nosso whatsapp para concluir. Nosso
        atendimento irá te guiar sobre o processo do pedido
      </p>
      <div className="flex justify-between items-center mt-4">
        <Button
          className="w-full"
          variant="link"
          onClick={() => setStep("address")}
        >
          Voltar
        </Button>
        <Button>
          <Link target="_blank" href={linkZap}>
            Enviar para o whatsapp
          </Link>
        </Button>
      </div>
      <Button variant="outline" onClick={handleWhatsApp}>
         Fazer outro pedido
      </Button>
    </div>
  );
};
