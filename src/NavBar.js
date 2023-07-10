import React from 'react';
import {NavLink} from "react-router-dom"

function NavBar() {
    
    return(
        <nav>
            <NavLink className="navbar-nav" to="/Home">Home</NavLink>
            <NavLink className="navbar-nav" to="/RandomRecipe">Generate Random Recipe</NavLink>
            <NavLink className="navbar-nav" to="/Search">Search</NavLink>
            <NavLink className="navbar-nav" to="/Cuisines">Cuisines by Country</NavLink>
        </nav>
    )
}

export default NavBar