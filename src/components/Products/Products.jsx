import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard";
import './Products.css';


function Products(){
        const [products,setProducts] = useState([]);
        const [search, setSearch] = useState("");
        const [isloading, setISloading] = useState(true);
 
        function handleChange(e){
                setSearch(e.target.value); 
        }
        
        useEffect(()=>{
            fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then((data)=>{
                return data.json();
            }).then((data)=>{
                setProducts(data);
                setISloading(false);
            }).catch((error) => console.error("Error fetching data: ", error));
           
        },[])

        if(isloading){
            return(
                <div className="loading">
                    <div className="loading-box"></div>
                </div>
            )
        }
        else{
            return(  
                <div>
                    <div className="input-parent">
                       <input type="text" className="input-search" value={search} onChange={handleChange} placeholder="Search For Products"/>
                    </div>   
                    <div className="products">                                     
                        {products.filter((product)=>{
                            return product.title.toLowerCase().includes(search.toLowerCase())
                        }).map((product)=>{
                            return <ProductCard product={product} key={product.id}/>
                            
                        })}                       
                </div>
            </div>
                
            )
        }
    
}
export default Products;