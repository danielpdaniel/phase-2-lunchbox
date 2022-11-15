import React, { useState } from "react";

function LikesDislikes({ btnText, text, foodId, votesNum, onVote, clickedVotes }){
    const [clicked, setClicked] = useState(clickedVotes.includes(foodId+text) ? true : false);

//    if(clickedVotes.includes(foodId+text)){
//     setClicked(true)
//    }

    // useEffect(()=>{
    //     console.log(clicked)
    // }, [clicked])

    function handleClick(){

        const postBody = text === "yums" ?
            {yums: !clicked ? votesNum + 1 : votesNum - 1} 
            :
            {ews: !clicked ? votesNum + 1 : votesNum - 1};

        setClicked(clicked=>!clicked)
        onVote(foodId, postBody, text)
    }
   

    //Uses props passed down from FoodItem to render button
    return (
        <div>
        <button onClick={handleClick} className={!clicked ? "yumsAndEws" : "clickedYumsAndEws"}>{btnText}</button>
            <h5 className="yumsAndEws">{votesNum} {votesNum === 1 ? text.slice(0, text.length-1) : text}</h5>
        </div>
    )
}

export default LikesDislikes;