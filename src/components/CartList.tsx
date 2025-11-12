import type { StateCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

interface Props {
    cart: StateCart;
}

export const CartList = ({ cart }: Props) => {
  return (
    <article className="flex-1">
        <h2>Mi Carrito</h2>
        <div className="flex flex-col justify-center">
            {
                cart.products.map((product)=>(
                    <CartItem product={product} />
                ))
            }
        </div>
    </article>
  )
}
