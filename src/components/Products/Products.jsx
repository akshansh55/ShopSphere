import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import './Products.css';


function Products(){
        const [products,setProducts] = useState([]);

        useEffect(()=>{
            fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then((data)=>{
                return data.json();
            }).then((data)=>{
                setProducts(data);
            }).catch((error) => console.error("Error fetching data: ", error));
           
        },[])

    return(
        <div className="products">
            {products.slice(0,16).map((product)=>{
                return <ProductCard product={product} key={product.id}/>
            })}
        </div>
    )
}
export default Products;