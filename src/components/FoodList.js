import React from "react";

function FoodList({ foods }){
    // console.log(foods)
    const alphabetizedFoods = foods ? foods.map(food => food.name).sort() : null;
    // console.log(alphabetizedFoods)
    return (
        <div className="foodList">
            <h2> Food List ! </h2>
            <h3>Here you can see all the foods that have been submitted so far. Feel free to add your own by clicking "Add Food" above! </h3>
            <ul>
            {foods ? alphabetizedFoods.map(food => <li key={food}>{food}</li>) : <h4>Loading...</h4>}
            </ul>
        </div>
    )
}

export default FoodList