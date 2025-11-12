import { StoreIcon } from "lucide-react"
import { type StateCart } from "../hooks/useCart"

interface Props {
    cart: StateCart;
}

export const Navbar = ({ cart }: Props) => {

    return (
        <nav className="flex justify-between m-3">
            <h1 className="flex flex-row">
                <StoreIcon />
                Ecommerce Cart
            </h1>
            <button className="px-2 bg-blue-500 text-white rounded-md">Carrito ({cart.products.length}) - ${cart.products.reduce((acc, el) => acc += el.price, 0)}</button>
        </nav>
    )
}
