import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import NavigationBar from './components/Navigation';
import { CartContext } from './Context/CartContext';
import {useSelector, useDispatch} from 'react-redux';




function App() {

  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('products')));
  // console.log(cart);
  // const cart = useSelector(state=> {return state.cart});
  // const dispatch = useDispatch();
  //   function handleAddToCart(productObj){
  //     if(!cart.includes(productObj)){
      
  //        dispatch({type:'SET_CART', payload:productObj});
  //     localStorage.setItem('products', JSON.stringify(updatedCart));
  //     }
        
  //   }
  //   function handleRemoveFromCart(productObj){
  //     let filteredProducts = cart.filter((product)=>{
  //       return product.id !== productObj.id
  //     });
  //     dispatch({type:'SET_CART',payload:productObj});
  //     localStorage.setItem('products', JSON.stringify(filteredProducts));
  //   }
    function increaseQuantity(quantity,setQuantity){
      
      setQuantity((quantity)=>quantity+1);
    }
    function decreaseQuantity(quantity,setQuantity){
        
        setQuantity((quantity)=>quantity-1);
      }
  return (
    <div className="App">
        <BrowserRouter>
         <CartContext.Provider value={{ increaseQuantity, decreaseQuantity}}> 
         <NavigationBar/>        
          <Switch>
              <Route path="/" component={ProductPage} exact={true}/>
              <Route path="/cart" component={CartPage} exact={true}/>
              <Route  component={NotFoundPage}/>
          </Switch>  
          <div className='footer'>
            © 2019 ShopSphere All rights reserved.
          </div>
         </CartContext.Provider>                 
        </BrowserRouter>
    </div>
  );
}
export default App;
