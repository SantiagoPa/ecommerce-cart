import { useState } from "react";
import type { Product } from "../types/product.type";
import { PRODUCTS } from "../data/mockData";

export interface CartItem extends Product {
    quantity: number;
}

export interface StateCart {
    products: CartItem[]
}

const onInitState = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || '{"products":[]}');
    return cart;
}

export const useCart = () => {
    const [cart, setCart] = useState<StateCart>(onInitState());
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState(PRODUCTS);

    const onAddCart = (product: Product) => {
        setCart((prev) => {
            const findProdut = prev.products.find((prod) => prod.id === product.id);
            if (findProdut) {
                const newState = { products: [...prev.products, { ...findProdut, quantity: findProdut.quantity += 1 }] }
                localStorage.setItem('cart', JSON.stringify(newState));
                return newState;
            } else {
                const newState = { products: [...prev.products, { ...product, quantity: 1 }] }
                localStorage.setItem('cart', JSON.stringify(newState));
                return newState;
            }
        });
    }

    const handleInputChange = (query: string) => {
        setQuery(query);
        const filterProducts = PRODUCTS.filter((product)=> product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        setProducts(filterProducts);
    }

    return { cart, query, products, handleInputChange, onAddCart };
}
