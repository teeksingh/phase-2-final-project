import React, {useState, useEffect} from "react";
import ViewCategory from "./ViewCategory";

function Home(){
    
    const [category, setCategory] = useState([])

    const categoryFetcher = async () => {
        const response = await fetch("https://flatiron-phase2-project.onrender.com/categories").then(r => r.json())
        setCategory(response)
        console.log("fetched response", response)
    }
    
    useEffect(() => {
          categoryFetcher()
        },[]);
    
      

    function addCategory(){

    }
    
      

    return(
        <div>
            <h1>Meal Recipe Generator App</h1>
           <button className="viewcat" onClick={ViewCategory}>View Categories</button>
           <button className="addcat" onClick={addCategory}>Add Category</button>
           <ViewCategory category={category}/>
        </div>
    )
}
export default Home