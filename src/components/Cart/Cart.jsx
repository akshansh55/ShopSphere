import { useContext } from "react";
import ProductCard from "../ProductCard";
import { CartContext } from "../../Context/CartContext";

function Cart(){

    
  
    const {cart} = useContext(CartContext);
    
    return(
        <div>
            {cart.map((cartitem)=>{
                <ProductCard />
            })}
        </div>
        
    )
}
export default Cart;