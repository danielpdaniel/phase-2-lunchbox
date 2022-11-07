import React, { useState } from "react";

function NewFoodInput({ onFormSubmit }){
    //new food obj to patch to db.json
    const [newFood, setNewFood] = useState("");
    
    //state variables for controlled inputs
    const [foodName, setFoodName] = useState("");
    const [foodCity, setFoodCity] = useState("");
    const [foodCountry, setFoodCountry] = useState("");
    const [foodImg, setFoodImg] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [foodStory, setFoodStory] = useState("");

    const [image, setImage] = useState(false);

    function handleChange(e){
        const name = e.target.name
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
                setImage(e.target.value)
                break;
            case "altText":
                setImgAlt(e.target.value);
                break;
            case "story":
                setFoodStory(e.target.value);
        }
    // console.log("name:", foodName, "city:", foodCity, "country:", foodCountry, "image:", foodImg, "alt:", imgAlt, "story:", foodStory)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("submitted!")
       const newFoodObj = {
            "name": foodName,
            "origin": `${foodCity}, ${foodCountry}`,
            "image": foodImg,
            "imageAlt": imgAlt,
            "story": foodStory
        }
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
        onFormSubmit(newFoodObj)
        }
    }

    return (
        <div>
        <h1> What Are You Bringing to Our Lil Picnic? </h1>
        <h2>what's a food that reminds you of home? Tell us about it below!</h2>
        <form className="newFoodForm" onSubmit={handleSubmit}>
            <label> What's this food called? 
                <input type="text" name="name" placeholder="What's this food called?" onChange={handleChange}/>
            </label>
            <label>Where did you eat this food?
                <input type="text" name="city" placeholder="City?" onChange={handleChange}/>
                <input type="text" name="country" placeholder="Country?" onChange={handleChange}/>
            </label>
            <label>Image URL:
                <input type="text" name="image" placeholder="image url" onChange={handleChange}/>
                {image ? 
                <p className="imgPreview">Image Preview:
                <img className="imgPreview" src={image}/> 
                </p>
                : null}
            </label>
            <label>Image Alt Text
                <input type="text" name="altText" placeholder="short image description" onChange={handleChange}/>
            </label>
            <label>A Fond Memory of This Food:
                <textarea type="textArea" name="story" placeholder="tell us a story..." onChange={handleChange}/>
            </label>
                <input type="submit" name="submit" value="Add Food!"/>
        </form>
        </div>
    )
}

export default NewFoodInput;