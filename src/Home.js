import React, {useState, useEffect} from "react";

function Home(){

    function getCategories(){
        fetch("https://flatiron-phase2-project.onrender.com/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data));
    console.log(data)
    }
    
    function addCategory(){

    }
    
    const [category, setCategories] = useState([])
    
    // useEffect(() => {
    //     fetch("https://flatiron-phase2-project.onrender.com/categories")
    //     .then((r) => r.json())
    //     .then((data) => {
    //       setCategories(data)
    //     })
    //   }, [])
      

    return(
        <div>
            <h1>Meal Recipe Generator App</h1>
           <button className="viewcat" onClick={getCategories}>View Categories</button>
           <button className="addcat" onClick={addCategory}>Add Category</button>
           
        </div>
    )
}
export default Home