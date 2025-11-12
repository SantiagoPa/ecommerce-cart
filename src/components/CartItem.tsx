import { MinusIcon, PlusIcon } from "lucide-react";
import type { CartItem as ICartItem } from "../hooks/useCart";


interface Props {
    product: ICartItem;
}

export const CartItem = ({ product }: Props) => {
  return (
    <article className="bg-gray-50 p-2">
        <img src={product.image} alt={product.name} />
        <span>{product.name}</span>
        <span>{product.price}</span>
        <span>{product.price * product.quantity}</span>

        <div>
            <button>
                <MinusIcon/>
            </button>
            <button>
                <PlusIcon />
            </button>
        </div>
    </article>
  )
}
