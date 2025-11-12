import { MinusIcon, PlusIcon } from "lucide-react";
import { formatPrice } from "../utils/formatPrice";
import type { CartItem as ICartItem } from "../context/StoreProvider";


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

            <div className="flex flex-row justify-center items-center gap-2">
                <button className="cursor-pointer bg-red-600 rounded-lg px-2 py-1">
                    <MinusIcon className="text-white h-4"/>
                </button>
                <input type="text" value={product.quantity} className="w-5 border-2 border-gray-200 rounded-md text-center" readOnly/>
                <button className="cursor-pointer bg-green-600 rounded-lg px-2 py-1">
                    <PlusIcon className="text-white h-4"/>
                </button>
            </div>
        </article>
    )
}
