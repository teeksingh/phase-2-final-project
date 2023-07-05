import React from 'react';
import {Link} from "react-router-dom"

function NavBar() {
    
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/RandomRecipe">Generate Random Recipe</Link>
            <Link to="/Search">Search</Link>
            
        </nav>
    )
}

export default NavBar