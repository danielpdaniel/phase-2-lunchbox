import React from "react";
import FoodItem from "./FoodItem";

function PicnicBasket({ foods }){
    // const reversedFoods = [...foods.reverse()];
    // console.log(foods)
    // console.log(reversedFoods)
    return (
        <div className = "foodItemsContainer">
            <h1> HOME ! </h1>
            {foods ? foods.reverse().map(food=> <FoodItem key={food.id} food={food}/>) : <h2>Loading...</h2>}
        </div>
    )
}

export default PicnicBasket;