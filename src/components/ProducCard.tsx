import { PlusIcon } from "lucide-react"
import type { Product } from "../types/product.type"


interface Props {
    product: Product
    onAddCart: (prodcut: Product) => void;
}

export const ProducCard = ({ product, onAddCart }: Props) => {



    return (
        <div key={product.id} className="p-5 rounded-lg flex flex-col justify-center">
            <img className="h-32 w-32" src={product.image} alt={product.image} />
            <span className="text-gray-900 text-lg">{product.name}</span>
            <span className="text-blue-600 text-lg">{product.price}</span>
            <button className="flex bg-green-500 text-white w-32 rounded-md justify-center cursor-pointer hover:bg-green-500/80" 
                onClick={() => onAddCart(product)}
            >
                <PlusIcon />
                agregar
            </button>
        </div>
    )
}
