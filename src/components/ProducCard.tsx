import { PlusIcon, StoreIcon } from "lucide-react"
import type { Product } from "../types/product.type"
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../hooks/useCart";
import { Activity, useMemo } from "react";


interface Props {
    product: Product
}

export const ProducCard = ({ product }: Props) => {

    const { cart, onAddCart } = useCart();

    const isProductInCart = useMemo(() => {
        return Boolean(cart.products.find((prod) => prod.id === product.id));
    }, [cart.products])

    return (
        <div key={product.id} className="p-5 rounded-lg flex flex-col justify-center items-center border-2 border-gray-200">
            <img className="h-32 w-44 border-2 border-gray-200 rounded-lg" src={product.image} alt={product.image} />
            <span className="text-gray-900 text-lg">{product.name}</span>
            <span className="text-blue-600 text-lg">{formatPrice(product.price)}</span>
            <Activity mode={isProductInCart ? "hidden" : "visible"}>
                <button className="flex gap-2 bg-green-600 text-white w-32 rounded-md justify-center cursor-pointer hover:bg-green-500/80 py-1"
                    onClick={() => onAddCart(product)}
                >
                    <PlusIcon />
                    <span>
                        agregar
                    </span>
                </button>
            </Activity>
            <Activity mode={isProductInCart ? "visible" : "hidden"}>
                <button className="flex gap-2 bg-red-600 text-white w-32 rounded-md justify-center cursor-pointer hover:bg-red-500/80 py-1 disabled"
                >
                    <StoreIcon />
                    <span>
                        En Carrito
                    </span>
                </button>
            </Activity>
        </div>
    )
}
