import React, { useState } from "react";

function NewFoodInput({ onFormSubmit }){
    
    //state variables for controlled inputs
    const [foodName, setFoodName] = useState("");
    const [foodCity, setFoodCity] = useState("");
    const [foodCountry, setFoodCountry] = useState("");
    const [foodStory, setFoodStory] = useState("");
    const [foodEmoji, setFoodEmoji] = useState("")
    const [btnClassName, setBtnClassName] = useState(null);

    const emojiArray = ["🍽","🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🥒","🌶","🌽","🥕","🧄","🧅","🥔","🍠","🥐","🥯","🍞","🥖","🥨","🧀","🥚","🍳","🧈","🥞","🧇","🥓","🥩","🍗","🍖","🦴","🌭","🍔","🍟","🍕","🥪","🥙","🧆","🌮","🌯","🥗","🥘","🥫","🍝","🍜","🍲","🍛","🍣","🍱","🥟","🦪","🍤","🍙","🍚","🍘","🍥","🥠","🥮","🍢","🍡","🍧","🍨","🍦","🥧","🧁","🍰","🎂","🍮","🍭","🍬","🍫","🍿","🍩","🍪","🌰","🥜","🍯","🥛","🍼","☕️","🍵","🧃","🥤","🍶","🍺","🍻","🥂","🍷","🥃","🍸","🍹","🧉","🍾","🧊","🥄","🍴","🥣","🥡","🥢","🧂"]


    function foodItemCapitalization(textInput){
        const inputWords = textInput.split(" ");
        const capCasedWordsArr = inputWords.map(word => word[0].toUpperCase() + word.substr(1));
        const capCasedWords = capCasedWordsArr.join(" ")
        return capCasedWords
        
    }

    function handleChange(e){
       
        switch(e.target.name){
            case "name":
                setFoodName(e.target.value);
                break;
            case "city":
                setFoodCity(e.target.value);
                break;
            case "country":
                setFoodCountry(e.target.value);
                break;
            case "emojiSelect":
                setFoodEmoji(e.target.value);
                break;
            case "story":
                setFoodStory(e.target.value);
                break;
            default:
                console.log("hmmm")
        }
    }

    function clearForm(){
        setFoodName("");
        setFoodCity("");
        setFoodCountry("");
        
        setFoodStory("");
    }

    function handleSubmit(e){
        e.preventDefault()
        
        /*Capitalizes first letter of Name, City, and Country and makes country inputs w value of "united states"=> "U.S.A." */
        const capCasedName = foodName ? foodItemCapitalization(foodName) : null;
        const capCasedCity = foodCity ? foodItemCapitalization(foodCity) : null;
        const capCasedCountry = 
        foodCountry ? 
        foodCountry.toUpperCase().includes("UNITED STATES") ? "U.S.A." : foodItemCapitalization(foodCountry)
         : null;
        
       const newFoodObj = {
            "name": capCasedName,
            "origin": `${capCasedCity}, ${capCasedCountry}`,
            "emoji": foodEmoji === "Select Emoji..." ? "🍽" : foodEmoji,
            "story": foodStory
        }

        if(foodName.length === 0){
            alert("Food name required!")
        }else if(foodCity.length === 0){
            alert("City name required!")
        }else if (foodCountry.length === 0){
            alert("Country name required!")
        }else if(foodStory.length === 0){
            alert("Food story required!")
        }else{
        onFormSubmit(newFoodObj);
        clearForm();
        }
    }

    return (
        <div className="newFoodFormContainer">
        <h2> What Are You Bringing to Our Lil Picnic? </h2>
        <h3>what's a food that reminds you of home? Tell us about it below!</h3>
        <form className="newFoodForm" onSubmit={handleSubmit}>
            <label> What's this food called? 
                <input type="text" name="name" placeholder="Food Name" onChange={handleChange} value={foodName}/>
            </label>
            <label>Where did you eat this food?
                <input type="text" name="city" placeholder="City" onChange={handleChange} value={foodCity}/>
                <input type="text" name="country" placeholder="Country" onChange={handleChange} value={foodCountry}/>
            </label>
            <label>Is there an Emoji to go with this food?
            <div>
                <select name="emojiSelect" id="emojis" onChange={handleChange} className="selectEmojis" value={foodEmoji}>
                    <option>Select Emoji...</option>
                    {emojiArray.map(emoji=><option>{emoji}</option>)}
                </select>
            </div>
           </label>
            <label>A Fond Memory of This Food:
                <textarea type="textArea" name="story" placeholder="tell us a story..." onChange={handleChange} value={foodStory}/>
            </label>
                <input type="submit" name="submit" value="Add Food!" onMouseDown={()=>setBtnClassName("clicked")} onMouseUp={()=>setBtnClassName(null)} className={btnClassName}/>
        </form>
        </div>
    )
}

export default NewFoodInput;