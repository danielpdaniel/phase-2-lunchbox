import React from "react";
import FoodItem from "./FoodItem";

function PicnicBasket({ foods, loginStatus, onFoodDelete }){
    // const reversedFoods = [...foods.reverse()];
    // console.log(foods)
    // console.log(reversedFoods)
    const reversedFoods = foods ? [...foods].reverse() : null;
    
    return (
        <div className = "foodItemsContainer">
            <h2> HOME ! </h2>
            <h3>Our Lil' Picnic Basket</h3>
            {foods ? reversedFoods.map(food=> <FoodItem key={food.id} food={food} loginStatus={loginStatus} onFoodDelete={onFoodDelete}/>) : <h2>Loading...</h2>}
        </div>
    )
}

export default PicnicBasket;