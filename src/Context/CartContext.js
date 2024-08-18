import { createContext } from "react";

 export const CartContext = createContext({
    cart:[],
    handleAddToCart:()=>{},
    handleRemoveFromCart:()=>{}
});

