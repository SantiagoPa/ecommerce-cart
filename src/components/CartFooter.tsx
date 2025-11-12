import { CreditCard } from "lucide-react"
import { formatPrice } from "../utils/formatPrice"
import { useCart } from "../hooks/useCart"


export const CartFooter = () => {

    const { totalItems, totalPrices } = useCart();

    return (
        <div className="bg-slate-800 rounded-lg mx-2 flex flex-row gap-4 justify-between p-4 mt-2 relative bottom-1">
            <div className="flex flex-col justify-items-start">
                <h3 className="text-white font-bold items-start">Total Items: {totalItems}</h3>
                <h2 className="text-green-500 font-bold">Total: {formatPrice(totalPrices)}</h2>
            </div>
            <button className="flex flex-row bg-blue-600 items-center rounded-lg px-3 text-white">
                <CreditCard />
                <span>
                Checkout
                </span>
            </button>
        </div>
    )
}
