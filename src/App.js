import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import NavigationBar from './components/Navigation';


function App() {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('products')));
 
  function handleAddToCart(productObj){
   
        const updatedCart = [...cart, productObj];
        setCart(updatedCart);
        localStorage.setItem('products',JSON.stringify(updatedCart))
        
  
  }

  function handleRemoveFromCart(productObj){
    let filteredProducts = cart.filter((product)=>{
      return product.id !== productObj.id
    });
    setCart(filteredProducts);
    localStorage.setItem('products',JSON.stringify(filteredProducts))
   
  }
  return (
    <div className="App">
        <BrowserRouter>
          <NavigationBar/>
          <Switch>
              <Route path="/" component={ProductPage} exact={true}/>
              <Route path="/cart" component={CartPage} exact={true}/>
              <Route  component={NotFoundPage}/>
          </Switch>          
        </BrowserRouter>
    </div>
  );
}

export default App;
