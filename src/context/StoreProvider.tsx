import { useMemo, useState, type ReactElement } from "react";
import type { Product } from "../types/product.type";
import { PRODUCTS } from "../data/mockData";
import { StoreContext } from "./StoreContext";

interface Props {
    children: ReactElement | ReactElement[];
}

export interface CartItem extends Product {
    quantity: number;
}

export interface StateCart {
    products: CartItem[]
}

export interface StateToast {
    isActive: boolean;
    variant: 'success' | 'error'
    title?: string;
    description?: string;
}

const onInitState = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || '{"products":[]}');
    return cart;
}


export const StoreProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<StateCart>(onInitState());
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState<Product[]>(PRODUCTS);

    const [toast, setToast] = useState<StateToast>({ isActive: false, variant: "success", title: '', description: "" })

    const onAddCart = (product: Product) => {
        setCart((prev) => {
            const findProdut = prev.products.find((prod) => prod.id === product.id);
            if (findProdut) {
                const newState = { products: [...prev.products.map((prod) => prod.id === findProdut.id ? { ...findProdut, quantity: findProdut.quantity += 1 } : prod)] }
                localStorage.setItem('cart', JSON.stringify(newState));
                onToast({ variant: "success", isActive: true, description: "Se ha aumentado la cantidad del producto!" });
                return newState;
            } else {
                const newState = { products: [...prev.products, { ...product, quantity: 1 }] }
                localStorage.setItem('cart', JSON.stringify(newState));
                onToast({ variant: "success", isActive: true });
                return newState;
            }
        });
    }

    const onMinusItemQuantity = (product: Product) => {
        setCart((prev) => {
            const findProdut = prev.products.find((prod) => prod.id === product.id);
            if (!findProdut) return prev
            if (findProdut.quantity > 1) {
                const newState = { products: [...prev.products.map((prod) => prod.id === findProdut.id ? { ...findProdut, quantity: findProdut.quantity -= 1 } : prod)] }
                localStorage.setItem('cart', JSON.stringify(newState));
                return newState;
            } else {
                // se elimina el prodcuto del carrito si tiene Quantity: 1
                const newState = { products: [...prev.products.filter(prod => prod.id !== product.id)] }
                localStorage.setItem('cart', JSON.stringify(newState));
                return newState;
            }
        });
    }

    const onPlusItemQuantity = (product: Product, isButtonCard?: boolean) => {
        setCart((prev) => {
            const findProdut = prev.products.find((prod) => prod.id === product.id);
            if (!findProdut) return prev
            const newState = { products: [...prev.products.map((prod) => prod.id === findProdut.id ? { ...findProdut, quantity: findProdut.quantity += 1 } : prod)] }
            localStorage.setItem('cart', JSON.stringify(newState));
            if (isButtonCard) onToast({ variant: "success", isActive: true, description: "Se ha aumentado la cantidad del producto!" });
            return newState;
        });
    }

    const handleInputChange = (query: string) => {
        setQuery(query);
        const filterProducts = PRODUCTS.filter((product) => product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setProducts(filterProducts);
    }

    const onToast = (toast: StateToast) => {
        setToast({ ...toast, isActive: true });
        // Auto remove después de la duración
        setTimeout(() => {
            setToast({ ...toast, isActive: false });
        }, 4000)
    }

    const totalItems = useMemo(() => {
        if (cart.products.length === 0) return 0;
        return cart.products.reduce((acc, el) => acc += el.quantity, 0);
    }, [cart.products])

    const totalPrices = useMemo(() => {
        if (cart.products.length === 0) return 0;
        return cart.products.reduce((acc, el) => {
            acc += el.price * el.quantity;
            return acc;
        }, 0);
    }, [cart.products]);



    return (
        <StoreContext
            value={{
                cart,
                query,
                products,
                toast,
                totalItems,
                totalPrices,
                onAddCart,
                onMinusItemQuantity,
                handleInputChange,
                onPlusItemQuantity,
                onToast,
            }}
        >
            {children}
        </StoreContext>
    )
}

