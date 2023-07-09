import React, {useState, useEffect} from "react";

function Home(){

    function getCategories(){

    }
    
    function addCategory(){

    }
    

    return(
        <div>
            <h1>Meal Recipe Generator App</h1>
           <button className="viewcat" onClick={getCategories}>View Categories</button>
           <button className="addcat" onClick={addCategory}>Add Category</button>
        </div>
    )
}
export default Home