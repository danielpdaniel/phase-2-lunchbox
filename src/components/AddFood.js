import React, { useState } from "react";
import FormInput from "./FormInput";
import EmojiSelector from "./EmojiSelector";

function AddFood({ onFormSubmit }){
    
    //state variables for controlled inputs:
    const [foodName, setFoodName] = useState("");
    const [foodCity, setFoodCity] = useState("");
    const [foodCountry, setFoodCountry] = useState("");
    const [foodStory, setFoodStory] = useState("");
    const [foodEmoji, setFoodEmoji] = useState("");
    //for styling:
    const [btnClassName, setBtnClassName] = useState(null);

    //functions to handle user input and submissions:
    function foodItemCapitalization(textInput){
        const inputWords = textInput.split(" ");
        const capCasedWordsArr = inputWords.map(word => word[0].toUpperCase() + word.substr(1));
        const capCasedWords = capCasedWordsArr.join(" ")
        return capCasedWords
    }

    //Handles form change by dynamically updating state values
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
                setFoodEmoji(e.target.value);
                break;
            case "story":
                setFoodStory(e.target.value);
                break;
            default:
                console.log("hmmm")
        }
    }

    //sets state values to "" to clear form
    function clearForm(){
        setFoodName("");
        setFoodCity("");
        setFoodCountry("");
        setFoodEmoji("")
        setFoodStory("");
    }

    //Conditionally sends form data via callback fn to App handleFormSubmit() to make post requst for new food
    function handleSubmit(e){
        e.preventDefault()
        
        //Capitalizes first letter of Name, City, and Country, makes country inputs w value of "united states"=> "U.S.A."
        const capCasedName = foodName ? foodItemCapitalization(foodName) : null;
        const capCasedCity = foodCity ? foodItemCapitalization(foodCity) : null;
        const capCasedCountry = 
        foodCountry ? 
        foodCountry.toUpperCase().includes("UNITED STATES") ? "U.S.A." : foodItemCapitalization(foodCountry)
         : null;
        
        //Data to be sent in post request
       const newFoodObj = {
            "name": capCasedName,
            "origin": `${capCasedCity}, ${capCasedCountry}`,
            "emoji": foodEmoji === "Select Emoji..." ? "🍽" : foodEmoji,
            "story": foodStory,
            "yums": 0,
            "ews": 0
        }

        //alerts if empty input fields, submits if all have entries
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

    //Renders form to gather new food submission data, includes FormInput and EmojiSelector components
    return (
    <div className="newFoodFormContainer">
        <h2> What Are You Bringing to Our Lil' Picnic? </h2>
        <h3>what's a food that reminds you of home? Tell us about it below!</h3>

        <form className="newFoodForm" onSubmit={handleSubmit}>
            <FormInput name="name" label="What's this food called?" value={foodName} placeholder="Food Name" onChange={handleChange}/>
            <FormInput name="city" label="Where did you eat this food?" value={foodCity} placeholder="City" onChange={handleChange}>
                <input type="text" name="country" placeholder="Country" onChange={handleChange} value={foodCountry}/>
            </FormInput>
            <EmojiSelector onChange={handleChange} foodEmoji={foodEmoji}/>
            <label>A Fond Memory of This Food:
                <textarea type="textArea" name="story" placeholder="tell us a story..." onChange={handleChange} value={foodStory}/>
            </label>
            <input type="submit" name="submit" value="Add Food!" onMouseDown={()=>setBtnClassName("clicked")} onMouseUp={()=>setBtnClassName(null)} className={btnClassName}/>
        </form>
     </div>
    )
}

export default AddFood;