import { useContext } from "react";
import ProductCard from "../ProductCard";
import { CartContext } from "../../Context/CartContext";
import CartCard from "../CartCard";
import './Cart.css';

function Cart(){
    const {cart,handleRemoveFromCart } = useContext(CartContext);
    
    return(
        <div className="cart-item">
            {cart.map((cartitem)=>{
               
               return <CartCard cartitem ={cartitem} key={cartitem.id}/>
            })}
        </div>
        
    )
}
export default Cart;