import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export const useCart = () => {
    const context = useContext(StoreContext);

    return { ...context };
}
