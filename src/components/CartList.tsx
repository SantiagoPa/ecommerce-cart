import { StoreIcon } from "lucide-react";
import { CartItem } from "./CartItem";
import { useCart } from "../hooks/useCart";
import { CartFooter } from "./CartFooter";



export const CartList = () => {

    const { cart } = useCart();

    return (
        <article className="bg-white ">
            <div className=" flex flex-row bg-gray-50 p-2 border-2 border-gray-100 rounded-md mb-5">
                <StoreIcon />
                <h2 className=" text-lg font-bold">Mi Carrito</h2>
            </div>
            <div className="flex flex-col justify-items-start gap-2 h-[60vh] overflow-y-auto">
                {
                    cart.products.map((product) => (
                        <CartItem product={product} />
                    ))
                }
            </div>
            <CartFooter />
        </article>
    )
}
