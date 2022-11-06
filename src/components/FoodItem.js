import React from "react";

function FoodItem({ food }){
    
    return (
        <div className="foodItem">
            <h3> {food.name}</h3>
            <img src={food.image} alt={food.imageAlt}/>
        </div>
    )
}

export default FoodItem