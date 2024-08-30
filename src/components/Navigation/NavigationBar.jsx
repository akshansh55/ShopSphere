import Cartlogo from '../../assets/Cartlogo.png';
import './NavigationBar.css';
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import { useContext } from 'react';

function NavigationBar(){
    const {cart} = useContext(CartContext);
    return(
        
                <div className="navbar">
                    <Link to='/'><img src={Cartlogo} alt='cart-logo' className='cart-logo-img' /></Link>  
                    <Link to='/' className='product-link'>Products</Link>
                    <Link to='/cart' className='cart-link' >Cart<sup className='cart-quantity'>{cart.length}</sup></Link>
                </div>
    
        
    )
}
export default NavigationBar;