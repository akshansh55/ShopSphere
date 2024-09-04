import {createStore} from 'redux';
const cart = JSON.parse(localStorage.getItem('products'))?JSON.parse(localStorage.getItem('products')):[];
function CartReducer(state= {cart:cart}, action){
   
    switch(action.type){
        case 'SET_CART':{
                return {...state, cart:[...action.payload]}
            }
        case 'ADD_TO_CART': {
            let newState = { ...state, cart: [...state.cart, action.payload]} 
             localStorage.setItem('products', JSON.stringify(newState.cart))       
             return newState;          
        }
        case 'DELETE_FROM_CART': {
                    let filteredMovies = state.cart.filter(product => product.id!==action.payload.id)
                    let newState = {...state, cart:[...filteredMovies]};
                    localStorage.setItem('products', JSON.stringify(newState.cart));
                    return newState;
        }
        default: 
        return state

    }
}
const store = createStore(CartReducer);
export default store;