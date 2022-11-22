import React from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";


function Food({foods, onVote, clickedVotes}){

    const params = useParams();

    const food = foods ? foods.filter(food => food.id === parseInt(params.id, 10))[0] : null;
    
    return (
        <div>
        {!food ? <h2>Loading...</h2> 
        :
        <FoodCard food={food} onVote={onVote} clickedVotes={clickedVotes}/>
        }
    </div>
    )
}

export default Food