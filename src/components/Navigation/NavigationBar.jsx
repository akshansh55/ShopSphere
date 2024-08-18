import Cartlogo from '../../assets/Cartlogo.png';
import './NavigationBar.css';

import { Link } from "react-router-dom";

function NavigationBar(){
    return(
        <div className="navbar">
            <Link to='/'><img src={Cartlogo} alt='cart-logo' className='cart-logo-img' /></Link>  
            <Link to='/' className='product-link'>Products</Link>
            <Link to='/cart' className='cart-link' >Cart</Link>
        </div>
    )
}
export default NavigationBar;