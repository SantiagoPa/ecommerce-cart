import { MinusIcon, PlusIcon } from "lucide-react";
import type { CartItem as ICartItem } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";


interface Props {
    product: ICartItem;
}

export const CartItem = ({ product }: Props) => {
    return (
        <article className="flex flex-row bg-gray-50 p-2 border-2 border-gray-200 rounded-lg justify-center items-center gap-2 mx-2">
            <img className="h-24 w-24 border-2 border-gray-300 rounded-md" src={product.image} alt={product.name} />
            <div className="flex flex-col">
                <span className="text-md font-bold">{product.name}</span>
                <span className="text-sm text-muted">{formatPrice(product.price)} x {product.quantity}</span>
            </div>
            <span className="text-blue-600">{formatPrice(product.price * product.quantity)}</span>

            <div className="flex flex-row justify-center items-center">
                <button className="cursor-pointer">
                    <MinusIcon className="text-red-600"/>
                </button>
                <input type="text" value={product.quantity} className="w-5 border-2 border-gray-500 rounded-md text-center" />
                <button className="cursor-pointer">
                    <PlusIcon className="text-green-600"/>
                </button>
            </div>
        </article>
    )
}
