import React, { useState } from "react";
import FormInput from "./FormInput";
import EmojiSelector from "./EmojiSelector";

function AddFood({ onFormSubmit }){
    
    const [foodName, setFoodName] = useState("");
    const [foodCity, setFoodCity] = useState("");
    const [foodCountry, setFoodCountry] = useState("");
    const [foodStory, setFoodStory] = useState("");
    const [foodEmoji, setFoodEmoji] = useState("🍽");
   
    const [btnClassName, setBtnClassName] = useState(null);

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
                if(foodName.length > 28){
                    alert("Max Food Name Length Exceeded!")
                }
                break;
            case "city":
                setFoodCity(e.target.value);
                break;
            case "country":
                setFoodCountry(e.target.value);
                break;
            case "emojiSelect":
                const selectedEmoji = e.target.value === "Select Emoji..." ? "🍽" : e.target.value
                setFoodEmoji(selectedEmoji);
                break;
            case "story":
                setFoodStory(e.target.value);
                break;
            default:
                console.log("no input found")
        }
    }

    function clearForm(){
        setFoodName("");
        setFoodCity("");
        setFoodCountry("");
        setFoodEmoji("")
        setFoodStory("");
    }

    function handleSubmit(e){
        e.preventDefault()
        
       
        const capCasedName = foodName ? foodItemCapitalization(foodName) : null;
        const capCasedCity = foodCity ? foodItemCapitalization(foodCity) : null;
        const capCasedCountry = 
        foodCountry ? 
        foodCountry.toUpperCase().includes("UNITED STATES") ? "USA" : foodItemCapitalization(foodCountry)
         : null;
        
        
       const newFoodObj = {
            "name": capCasedName,
            "origin": `${capCasedCity}, ${capCasedCountry}`,
            "emoji": foodEmoji === "Select Emoji..." ? "🍽" : foodEmoji,
            "story": foodStory,
            "yums": 0,
            "ews": 0
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
        <h2> What Are You Bringing to Our Lil' Picnic? </h2>
        <h3>What's a food that's near and dear to you? Tell us about it below!</h3>

        <form className="newFoodForm" onSubmit={handleSubmit}>
            <FormInput name="name" label="What's this food called?" value={foodName} placeholder="Food Name" onChange={handleChange}/>
            <FormInput name="city" label="Where did you eat this food?" value={foodCity} placeholder="City" onChange={handleChange}>
                <input type="text" name="country" placeholder="Country" onChange={handleChange} value={foodCountry}/>
            </FormInput>
            <label>Is there an emoji representing this food?
                <EmojiSelector onChange={handleChange} foodEmoji={foodEmoji}/>
            </label>
            {foodEmoji ? <div className="cardEmojis">{foodEmoji}</div> : null}
            <label>A Fond Memory of This Food:
                <textarea type="textArea" name="story" placeholder="tell us a story..." onChange={handleChange} value={foodStory}/>
            </label>
            <input type="submit" name="submit" value="Add Food!" onMouseDown={()=>setBtnClassName("clicked")} onMouseUp={()=>setBtnClassName(null)} className={btnClassName}/>
        </form>
     </div>
    )
}

export default AddFood;