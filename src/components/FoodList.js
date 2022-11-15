import React from "react";

function FoodList({ foods }){
    // const alphabetizedFoods = foods ? foods.map(food => food.name).sort() : null;
    const alphabetizedFoods = foods ? foods.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
       if(nameA > nameB){
        return 1
       }else if (nameA < nameB){
        return -1
       }
       return 0
    }) : null
    console.log(alphabetizedFoods)
    //renders a list of all the foods sorted alphabetically
    return (
        <div className="foodList">
            <h2> Food List ! </h2>
            <h3>Here you can see all the foods that have been submitted so far. Feel free to add your own by clicking "Add Food" above! </h3>
            <ul>
            {alphabetizedFoods ? alphabetizedFoods.map(food => <li key={food.id}><a href={`/foods/${food.id}`}>{food.name}</a></li>) : <h4>Loading...</h4>}
            </ul>
        </div>
    )
}

export default FoodList