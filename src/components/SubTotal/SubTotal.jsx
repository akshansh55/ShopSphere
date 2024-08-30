import Cart from "../Cart";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
function SubTotal({quantity,cartitem}){

    const {cart} = useContext(CartContext);

    function totalValue(cart,cartitem, quantity){
        let totalValuex =0;
        for(let i=0;i<cart.length;i++){
            totalValuex+=cartitem.price.value*quantity;
        }
        return totalValuex;
    }
    return(
        <div>
            <h3>SubTotal:-</h3>
            <div>{totalValue(cart,cartitem,quantity)}</div>
        </div>
    )
}

export default SubTotal;