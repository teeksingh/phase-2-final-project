import React, {useState, useEffect} from "react";
import Category from "./Category";

function Home(){
    
    const [category, setCategory] = useState([])
    const categoryFetcher = async () => {
        const response = await fetch("http://localhost:4000/categories").then(r => r.json())
        setCategory(response)
        console.log(response)
    }
    
    
    useEffect(() => {
          categoryFetcher()
        },[]);
    
      

    function addCategory(){

    }
    
    
      

    return(
        <div>
            <h1>Meal Recipe Generator App</h1>
           <button className="viewcat" onClick={Category}>View Categories</button>
           <button className="addcat" onClick={addCategory}>Add Category</button>
           
        </div>
    )
}
export default Home