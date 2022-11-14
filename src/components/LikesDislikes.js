import React, { useState } from "react";

function LikesDislikes({ btnText, text, foodId, upDownVoteNum }){
    const [clicked, setClicked] = useState(false);
    const [votesNum, setVotesNum] = useState(upDownVoteNum)

    function handleClick(){
        // setClicked(clicked=> !clicked)
       const postBody = text === "yums" ?
       {
        yums: !clicked ? votesNum + 1 : votesNum - 1
       } :
       {
        ews: !clicked ? votesNum + 1 : votesNum - 1
       }
        fetch(`https://phase-2-lunchbox-data.onrender.com/foods/${foodId}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(postBody)
        })
        .then(r=>r.json())
        .then(data=>{
            
            setClicked(clicked=>!clicked);
            setVotesNum(data[`${text}`]);
        })
        
    }

    return (
        <div>
        <button onClick={handleClick} className={!clicked ? "yumsAndEws" : "clickedYumsAndEws"}>{btnText}</button>
            <h5 className="yumsAndEws">{votesNum} {text}</h5>
        </div>
    )
}

export default LikesDislikes;