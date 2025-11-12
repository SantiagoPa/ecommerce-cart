import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export const useCart = () => {
    const { cart, query, products, handleInputChange, onAddCart } = useContext(StoreContext);

    return { cart, query, products, handleInputChange, onAddCart };
}
