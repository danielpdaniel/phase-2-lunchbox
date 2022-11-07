import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/newfood">Add Food</NavLink>
            <NavLink to="/foodlist">All Foods</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;