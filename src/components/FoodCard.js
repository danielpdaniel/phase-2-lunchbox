import React, { useState } from "react";
import LikesDislikes from "./LikesDislikes";

function FoodCard({ food, onVote, clickedVotes }){
    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(clicked => !clicked)
    }

    const foodTitleClassName = food.name.length <= 15 ? "standardFoodTitle" : "longFoodTitle"

    return (
        <div className={!clicked ? "foodItem" : "foodItemExpanded"}>
            <h4 className={foodTitleClassName}>{food.name}</h4>
            <div className="cardEmojis">{food.emoji? food.emoji : "🍽"}</div>
        <br></br>
            <button onClick={handleClick} className={clicked? "clicked" : null}>{!clicked ? "Food Story \u25BC" : "Close \u25B2"}</button>
            {!clicked ? null :
            <div className="expandedFoodStory">
            <h5>{food.origin}</h5>
            <p>{food.story}</p>
            </div>}
            <div className="votes">
                <LikesDislikes btnText="Yum!" text="yums" foodId={food.id} votesNum={food.yums} onVote={onVote} clickedVotes={clickedVotes}/>
                <LikesDislikes btnText="Ew!" text="ews" foodId={food.id} votesNum={food.ews} onVote={onVote} clickedVotes={clickedVotes}/>
            </div>
        </div>
    )
}

export default FoodCard