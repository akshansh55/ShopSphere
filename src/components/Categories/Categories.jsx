import { useEffect, useState } from "react";
import './Categories.css'
function Categories(){
    const [categories, setCategories] = useState([]);
        useEffect(()=>{
                fetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products')
                .then((res)=>{
                    return res.json(); })
                .then((res)=>{setCategories(res);
                }).catch((err)=>{console.log(err.message)})
        },[])

        const handleClick =()=>{
            return categories.filter((category, product)=>{
                return category.category==product.category;
            })
        }
        return(
            <ul className="categories-container">
                {categories.map((category)=>{
                    return(<button className="category" ><li key={category.id} >
                            {category.category}
                    </li></button>)
                })}
            </ul>
        )
}

export default Categories;