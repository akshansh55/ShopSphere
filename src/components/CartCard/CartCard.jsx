
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import './CartCard.css';
function CartCard({cartitem}){
   
    const [quantity, setQuantity] = useState(0);

    const {handleRemoveFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
        return(
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src={cartitem.images[0]} alt="product-img"/>
                </div>
                <div className="cartitem-title">
                    {cartitem.title}
                </div>
                <div>
                    <button onClick={()=>{increaseQuantity(quantity,cartitem,setQuantity)}}>+</button>
                </div>
                <div>
                    {quantity}
                </div>
                <div>
                    <button onClick={()=>{decreaseQuantity(quantity,cartitem,setQuantity)}}>-</button>
                </div>
                <div  className="cartitem-price">
                    {cartitem.price.value}
                </div>
                <div  className="cartitem-button">
                    <button  className="cartitem-delete" onClick={()=>{handleRemoveFromCart(cartitem)}}>Delete</button>
                </div>

                <div  className="cartitem-total value">
                    {cartitem.price.value*quantity}
                </div>
            </div>
        )
    }
    


export default CartCard;