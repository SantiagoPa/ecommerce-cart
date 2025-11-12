import { PlusIcon } from "lucide-react"
import type { Product } from "../types/product.type"
import { formatPrice } from "../utils/formatPrice";


interface Props {
    product: Product
    onAddCart: (prodcut: Product) => void;
}

export const ProducCard = ({ product, onAddCart }: Props) => {



    return (
        <div key={product.id} className="p-5 rounded-lg flex flex-col justify-center items-center border-2 border-gray-200">
            <img className="h-32 w-44 border-2 border-gray-200 rounded-lg" src={product.image} alt={product.image} />
            <span className="text-gray-900 text-lg">{product.name}</span>
            <span className="text-blue-600 text-lg">{formatPrice(product.price)}</span>
            <button className="flex bg-green-600 text-white w-32 rounded-md justify-center cursor-pointer hover:bg-green-500/80 py-1" 
                onClick={() => onAddCart(product)}
            >
                <PlusIcon />
                agregar
            </button>
        </div>
    )
}
