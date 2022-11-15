import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    //Provides Links to page Routes as setup in App
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/addfood">Add Food</NavLink>
            <NavLink to="/foodlist">All Foods</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;