import React from "react";
import { useParams } from "react-router-dom";
import LikesDislikes from "./LikesDislikes";


function Food({foods, onVote, clickedVotes}){
    const params = useParams();
   
    console.log(params);

   
    const food = foods ? foods.filter(food => food.id === parseInt(params.id, 10))[0] : null;
    console.log(food)
    
    return (
        <div>
        {!food ? <h2>Loading...</h2> 
        :
         <div className="foodItemExpanded">
            <h2>{food.name}</h2>
            <div className="cardEmojis">{food.emoji}</div>
            <div className="expandedFoodStory">
            <h5>{food.origin}</h5>
            <p>{food.story}</p>
            </div>
            <LikesDislikes btnText="Yum!" text="yums" foodId={food.id} votesNum={food.yums} onVote={onVote} clickedVotes={clickedVotes}/>
            <LikesDislikes btnText="Ew!" text="ews" foodId={food.id} votesNum={food.ews} onVote={onVote} clickedVotes={clickedVotes}/>
        </div>}
    </div>
    )
}

export default Food