import { createContext } from "react";
import type { StateCart, StateToast } from "./StoreProvider";
import type { Product } from "../types/product.type";

export interface StoreContextProps {
    cart: StateCart;
    query: string;
    products: Product[];
    toast: StateToast;
    onAddCart: (product: Product) => void;
    handleInputChange: (query: string) => void;
    onMinusItemQuantity: (product: Product) => void;
    onPlusItemQuantity: (product: Product, isButtonCard?:boolean) => void;
    onToast: (toast: StateToast) => void;
}

export const StoreContext = createContext({} as StoreContextProps);
