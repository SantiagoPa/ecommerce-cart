import { Activity } from "react";

import { StoreIcon } from "lucide-react"
import { type StateCart } from "../hooks/useCart"

interface Props {
    cart: StateCart;
}

export const Navbar = ({ cart }: Props) => {

    return (
        <nav className="flex justify-between mt-1 bg-gray-50 p-5 rounded-lg border-2 border-gray-100 mx-10">
            <h1 className="flex flex-row gap-2">
                <StoreIcon />
                Ecommerce Cart
            </h1>
            <button className="px-2 bg-blue-500 text-white rounded-md min-w-1/5 flex flex-row justify-center gap-3 py-2">
                <StoreIcon />
                Carrito
                <Activity mode={cart.products.length > 0 ? "visible" : "hidden"}>
                    <span>
                        ({cart.products.length}) - ${cart.products.reduce((acc, el) => acc += el.price, 0)}
                    </span>
                </Activity>
            </button>
        </nav>
    )
}
