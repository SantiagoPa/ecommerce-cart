import { StoreIcon } from "lucide-react";
import type { StateCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

interface Props {
    cart: StateCart;
}

export const CartList = ({ cart }: Props) => {
    return (
        <article className="flex-1 bg-white">
            <div className=" flex flex-row bg-gray-50 p-2 border-2 border-gray-100 rounded-md mb-5">
                <StoreIcon />
                <h2 className=" text-lg font-bold">Mi Carrito</h2>
            </div>
            <div className="flex flex-col justify-center gap-2">
                {
                    cart.products.map((product) => (
                        <CartItem product={product} />
                    ))
                }
            </div>
        </article>
    )
}
