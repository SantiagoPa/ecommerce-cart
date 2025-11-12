import { Activity } from "react";

import { StoreIcon } from "lucide-react"
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";


export const Navbar = () => {

    const { totalItems, totalPrices } = useCart();

    return (
        <nav className="flex justify-between mt-1 bg-gray-50 p-5 rounded-lg border-2 border-gray-100 mx-10">
            <h1 className="flex flex-row gap-2">
                <StoreIcon />
                Ecommerce Cart
            </h1>
            <button className="px-2 bg-blue-500 text-white rounded-md min-w-1/5 flex flex-row justify-center gap-3 py-2">
                <StoreIcon />
                Carrito
                <Activity mode={totalItems > 0 ? "visible" : "hidden"}>
                    <span>
                        ({totalItems}) - {formatPrice(totalPrices)}
                    </span>
                </Activity>
            </button>
        </nav>
    )
}
