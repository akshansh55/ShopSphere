import { useContext, useState } from 'react';
import './ProductCard.css';
import  {CartContext}  from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';
function ProductCard({product}){
    const {cart, handleAddToCart, setCart}   =  useContext(CartContext);

    function doesContain(){
        for(let i=0;i<cart.length;i++){
            if(cart[i].id===product.id){
                return true;
            }
        }
        return false;
    }
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: `${product.price.currency}`
        }).format(value);
        
    return(
        <div className='product-card'>
            <div className="product-img">
                    <img src={product.images[0]} alt="product-img"/>
            </div>         
            <div className='product-details'>
                <div>
                    {product.brand}
                </div>
                <div className='product-title'>
                    {product.title}
                </div>
                <div>
                    {numberFormat(product.price.value)}
                </div>
                <div className='links-parent'>       
                   {doesContain()?<button className='go-to-cart-link'><Link to='/cart' alt={NotFoundPage} className='go-to-cart-link-link' >GO TO CART</Link></button>:<button onClick={()=>{handleAddToCart(product)}} className='add-to-cart'>ADD TO CART</button>} 
                    
                </div>
            
            </div>     
        </div>
       
    )
}
export default ProductCard;