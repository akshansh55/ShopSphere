import { useContext, useState } from 'react';
import './ProductCard.css';
import  {CartContext}  from '../../Context/CartContext';
function ProductCard({product}){
    const {cart, handleAddToCart}   =  useContext(CartContext);
    
        
    
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: `${product.price.currency}`
        }).format(value);
        console.log(cart);
    return(
        <div className='product-card'>
            <div className="product-img">
                    <img src={product.images[0]} alt="product-img"/>
            </div>         
            <div className='product-details'>
                <div>
                    {product.brand}
                </div>
                <div>
                    {product.title}
                </div>
                <div>
                    {numberFormat(product.price.value)}
                </div>
                <button onClick={(product)=>{handleAddToCart(product)}}>Add To Cart</button>
            </div>     
        </div>
       
    )
}
export default ProductCard;