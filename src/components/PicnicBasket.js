import React from "react";
import FoodItem from "./FoodItem";

function PicnicBasket({ foods }){
    return (
        <div>
            <h1> HOME ! </h1>
            {foods ? foods.map(food=> <FoodItem key={food.name} food={food}/>) : <h2>Loading...</h2>}
        </div>
    )
}

export default PicnicBasket;