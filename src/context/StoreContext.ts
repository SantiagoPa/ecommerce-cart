import { createContext } from "react";
import type { StateCart } from "./StoreProvider";
import type { Product } from "../types/product.type";

export interface StoreContextProps {
    cart: StateCart;
    query: string;
    products: Product[];
    onAddCart: (product: Product) => void;
    handleInputChange: (query: string) => void;
}

export const StoreContext = createContext({} as StoreContextProps);
