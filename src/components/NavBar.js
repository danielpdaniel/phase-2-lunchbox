import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

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