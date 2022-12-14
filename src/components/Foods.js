import React from "react";
import {NavLink} from "react-router-dom"

function Foods({ foods }){

    const foodsToSort = foods ? [...foods] : null;
    const alphabetizedFoods = foods ? foodsToSort.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
       if(nameA > nameB){
        return 1
       }else if (nameA < nameB){
        return -1
       }
       return 0
    }) : null
   
    return (
        <div className="foodList">
            <h2> Food List ! </h2>
            <h3>Here you can see all the foods that have been submitted so far. Feel free to add your own by clicking "Add Food" above! </h3>
            <ul>
            {alphabetizedFoods ? 
            alphabetizedFoods.map(food => 
                <li key={food.id}>
                    <NavLink to={`/foods/${food.id}`}>
                        {food.name}
                    </NavLink>
                </li>) 
                : <h4>Loading...</h4>}
            </ul>
        </div>
    )
}

export default Foods