import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import NavigationBar from './components/Navigation';
import { CartContext } from './Context/CartContext';



function App() {
  
  const [cart, setCart] = useState([]);
 
  console.log(cart);
  
  function handleAddToCart(productObj){
        const updatedCart = [...cart, productObj]
        setCart(updatedCart);
        localStorage.setItem('products',JSON.stringify(updatedCart));
  }

  function handleRemoveFromCart(productObj){
    let filteredProducts = cart.filter((product)=>{
      return product.id !== productObj.id
    });
    setCart(filteredProducts); 
    localStorage.setItem('products', JSON.stringify(filteredProducts));
  }
  function increaseQuantity(productObj,quantity,setQuantity){
    
    setQuantity((quantity)=>quantity+1);
  }
  function decreaseQuantity(productObj,quantity,setQuantity){
    if(quantity===-1) return;
    setQuantity((quantity)=>quantity-1);
  }

  return (
    <div className="App">
        <BrowserRouter>
         <CartContext.Provider value={{cart, handleAddToCart , handleRemoveFromCart, setCart, increaseQuantity,decreaseQuantity}}> 
         <NavigationBar/>
          <Switch>
              <Route path="/" component={ProductPage} exact={true}/>
              <Route path="/cart" component={CartPage} exact={true}/>
              <Route  component={NotFoundPage}/>
          </Switch>  
         </CartContext.Provider>
                  
        </BrowserRouter>
    </div>
  );
}

export default App;
