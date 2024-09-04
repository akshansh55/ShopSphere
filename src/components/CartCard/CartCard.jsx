
import { useContext, useState, useRef } from "react";
import { CartContext } from "../../Context/CartContext";
import './CartCard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
function CartCard({cartitem}){
   
    const [quantity, setQuantity] = useState(1);
    const cart = useSelector((state)=>{return state.cart})
    const { increaseQuantity, decreaseQuantity} = useContext(CartContext);    
    const dispatch = useDispatch();
        return(
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src={cartitem.images[0]} alt="product-img"/>
                </div>
                <div className="cartitem-title">
                    {cartitem.title}
                </div>
                <div>
                    <button onClick={()=>{increaseQuantity(quantity,setQuantity)}}>+</button>
                </div>
                <div>
                    {quantity}
                </div>
                <div>
                    <button onClick={()=>{if(quantity>1){decreaseQuantity(quantity,setQuantity)}}}>-</button>
                </div>
                <div  className="cartitem-price">
                    {cartitem.price.value}
                </div>
                <div  className="cartitem-button">
                    <button  className="cartitem-delete" onClick={()=>{dispatch({type:'DELETE_FROM_CART',payload:cartitem})}}><FontAwesomeIcon icon={faTrash} /></button>
                </div>

                <div  className="cartitem-total value">
                {cartitem.price.value*quantity}
                </div>
                
            </div>
        )
    }
    


export default CartCard;