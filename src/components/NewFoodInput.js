import React, { useState } from "react";

function NewFoodInput({ onFormSubmit }){
    //new food obj for POST to db.json
    // const [newFood, setNewFood] = useState("");
    
    //state variables for controlled inputs
    const [foodName, setFoodName] = useState("");
    const [foodCity, setFoodCity] = useState("");
    const [foodCountry, setFoodCountry] = useState("");
    const [foodImg, setFoodImg] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [foodStory, setFoodStory] = useState("");

    const [previewImage, setPreviewImage] = useState(false);

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
                break;
            case "city":
                setFoodCity(e.target.value);
                break;
            case "country":
                setFoodCountry(e.target.value);
                break;
            case "image":
                setFoodImg(e.target.value);
                setPreviewImage(e.target.value)
                break;
            case "altText":
                setImgAlt(e.target.value);
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
        setFoodImg("");
        setImgAlt("");
        setFoodStory("");
        setPreviewImage(false);
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
            "image": foodImg,
            "imageAlt": imgAlt,
            "story": foodStory
        }

    /*no capcasing or U.S.A. replacement */
    // const newFoodObj = {
    //             "name": foodName,
    //             "origin": `${foodCity}, ${foodCountry}`,
    //             "image": foodImg,
    //             "imageAlt": imgAlt,
    //             "story": foodStory
    //         }

        if(foodName.length === 0){
            alert("Food name required!")
        }else if(foodCity.length === 0){
            alert("City name required!")
        }else if (foodCountry.length === 0){
            alert("Country name required!")
        }else if(foodImg.length === 0){
            alert("Food Image Required!")
        }else if(imgAlt.length === 0){
            alert("Image alt text required!")
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
                <input type="text" name="name" placeholder="What's this food called?" onChange={handleChange} value={foodName}/>
            </label>
            <label>Where did you eat this food?
                <input type="text" name="city" placeholder="City?" onChange={handleChange} value={foodCity}/>
                <input type="text" name="country" placeholder="Country?" onChange={handleChange} value={foodCountry}/>
            </label>
            <label>Image URL:
                <input type="text" name="image" placeholder="image url" onChange={handleChange} value={foodImg}/>
                {previewImage ? 
                <p className="imgPreview">Image Preview:
                <img alt="preview for link submission" className="imgPreview" src={previewImage}/> 
                </p>
                : null}
            </label>
            <label>Image Alt Text
                <input type="text" name="altText" placeholder="short image description" onChange={handleChange} value={imgAlt}/>
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