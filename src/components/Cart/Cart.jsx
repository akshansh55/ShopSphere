import { useContext } from "react";
import ProductCard from "../ProductCard";
import { CartContext } from "../../Context/CartContext";
import CartCard from "../CartCard";
import './Cart.css';
import { useSelector,useDispatch } from "react-redux";
function Cart(){
    // const {cart,handleRemoveFromCart } = useContext(CartContext);
    const cart = useSelector(state=> {return state.cart});
    const dispatch = useDispatch();
    function grandTotal(quantity){
       let grandTotalValue=0;
        for(let i=0;i<cart.length;i++){
               grandTotalValue+= cart[i].price*quantity
        }
    }
      function handleAddToCart(productObj){
        if(!cart.includes(productObj)){
        
         let updatedCart =  dispatch({type:'SET_CART', payload:productObj});
        localStorage.setItem('products', JSON.stringify(updatedCart));
        }
          
      }
      function handleRemoveFromCart(productObj){
        let filteredProducts = cart.filter((product)=>{
          return product.id !== productObj.id
        });
        dispatch({type:'SET_CART',payload:productObj});
        localStorage.setItem('products', JSON.stringify(filteredProducts));
      }

   if(cart.length===0){
    return(

        <div className="cart">
            <div className="cart-heading">
                My Cart
            </div>
            <div className="empty-cart-parent">
             <p className="empty-cart">Your Cart is Empty</p>
            </div>
            
            <div className="grand-total">
                Grand Total:{}               
            </div>
        </div>
    )  
   }
    else{
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
                    Grand Total:{}               
                </div>
            </div>
            
            
        )
    }
    
}
export default Cart;