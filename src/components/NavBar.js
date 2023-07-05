import React from 'react';
import {NavLink} from "react-router-dom"

function NavBar() {
    
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/RandomRecipe">Generate Random Recipe</NavLink>
            <NavLink to="/Search">Search</NavLink>
            <NavLink to="/Cuisines">Cuisines by Country</NavLink>
        </nav>
    )
}

export default NavBar