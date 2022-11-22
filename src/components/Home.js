import React from "react";
import FoodCard from "./FoodCard";

function Home({ foods, onVote, clickedVotes }){
    
    const reversedFoods = foods ? [...foods].reverse() : null;

    return (
        <div className = "foodItemsContainer">
            <h2>Our Lil' Picnic Basket</h2>
            <h3>Check out our tasty submissions below!</h3>
            {foods ? reversedFoods.map(food=> <FoodCard key={food.id} food={food} onVote={onVote} clickedVotes={clickedVotes}/>) : <h2>Loading...</h2>}
        </div>
    )
}

export default Home;