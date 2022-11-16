import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";


function Food({foods, onVote, clickedVotes}){
    //Grabs url parameter to use as id filter
    const params = useParams();

   //filters for id value
    const food = foods ? foods.filter(food => food.id === parseInt(params.id, 10))[0] : null;
    
    //Renders single FoodCard to match food id in url
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