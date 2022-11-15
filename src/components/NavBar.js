import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    //Provides Links to page Routes as setup in App + styling options for currently active NavLink
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/foods/new">Add Food</NavLink>
            <NavLink exact to="/foods">All Foods</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;