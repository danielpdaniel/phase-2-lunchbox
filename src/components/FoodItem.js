import React, { useState } from "react";

function FoodItem({ food, loginStatus, onFoodDelete }){
    const [clicked, setClicked] = useState(false)
    
    function handleClick(){
        setClicked(clicked => !clicked)
    }

    function handleDelete(){
        fetch(`https://phase-2-lunchbox-data.onrender.com/foods/${food.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(resp=>resp.json())
        .then(()=>onFoodDelete(food))
    }

    // function handleMouseOver(){
    //     setClicked(true)
    // }

    // function handleMouseOut(){
    //     setClicked(false) 
    // }
    
    return (
        <div className={!clicked ? "foodItem" : "foodItemExpanded"}>
            {loginStatus ? <button onClick={handleDelete}>X</button> : null}
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