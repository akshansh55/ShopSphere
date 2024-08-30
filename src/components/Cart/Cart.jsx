import { useContext } from "react";
import ProductCard from "../ProductCard";
import { CartContext } from "../../Context/CartContext";
import CartCard from "../CartCard";
import './Cart.css';
import SubTotal from "../SubTotal";
function Cart(){
    const {cart,handleRemoveFromCart } = useContext(CartContext);
    function grandTotal(cart){
        let grandTotalValue =0;
            for(let i=0;i<cart.length;i++){
                    grandTotalValue+=cart[i].price.value
            }
            return grandTotalValue;
    }
   
    
    return(

        <div className="cart">
            <div className="cart-heading">
                My Cart
            </div>
            <div className="cart-item">
                {cart.map((cartitem)=>{
                   return <CartCard cartitem ={cartitem} key={cartitem.id}/>
            })}
        </div>
            <div className="grand-total">
                Grand Total:{grandTotal(cart)}               
            </div>
        </div>
        
        
    )
}
export default Cart;