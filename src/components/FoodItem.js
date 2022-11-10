import React, { useState } from "react";

function FoodItem({ food }){
    const [clicked, setClicked] = useState(false)
    
    function handleClick(){
        setClicked(clicked => !clicked)
    }

    // function handleMouseOver(){
    //     setClicked(true)
    // }

    // function handleMouseOut(){
    //     setClicked(false) 
    // }
    
    return (
        <div className={!clicked ? "foodItem" : "foodItemExpanded"}>
            <h3> {food.name}</h3>
            <img src={food.image} alt={food.imageAlt}/>
        <br></br>
            <button onClick={handleClick} className={clicked? "clicked" : null}>{!clicked ? "Food Story \u25BC" : "Close \u25B2"}</button>
            {!clicked ? null :
            <div className="expandedFoodStory">
            <h4>{food.origin}</h4>
            <p>{food.story}</p>
            </div>}
        </div>
    )
}

export default FoodItem