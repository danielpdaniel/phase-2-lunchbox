import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import About from "./About";
import FoodList from "./FoodList";
import AddFood from "./AddFood";
import PicnicBasket from "./PicnicBasket";

/* Nodes Tree:
App
|-NavBar - ( Home/PicnicBasket, AddFood, FoodList, About)
|-FoodList
|-PicnicBasket
  |-FoodItem
    |-LikesDislikes
|-AddFood
  |-FormInput
  |-EmojiSelector
*/

function App() {
  const [foods, setFoods] = useState(false)
  const [clickedVotes, setClickedVotes] = useState([])
  
  //fetch to get initial set of foods data
  useEffect(()=>{
    fetch("https://phase-2-lunchbox-data.onrender.com/foods")
    .then(resp=>resp.json())
    .then(data=>setFoods(data))
  },[])

  //fetch to post new food to database + update PicnicBasket FoodItems + FoodList via state
  function handleFormSubmit(newFoodObj){
    fetch("https://phase-2-lunchbox-data.onrender.com/foods",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newFoodObj)
    })
    .then(resp=>resp.json())
    .then(data=>setFoods([...foods, data]))
  }

   //Makes patch request to update likes/dislikes in database as well as state
   function handleVote(foodId, patchedFoodObj, upOrDown){
     fetch(`https://phase-2-lunchbox-data.onrender.com/foods/${foodId}`,{
         method: "PATCH",
         headers: {
             "Content-type": "application/json"
         },
         body: JSON.stringify(patchedFoodObj)
     })
     .then(r=>r.json())
     .then(data=>{
      const patchedFoods = foods.map(food => food.id === foodId ? data : food)
      setFoods(patchedFoods);
      //Uses a state controlled array held in App to determine whether "Yum!" and "Ew!" buttons have been clicked already so they don't re-render when PicnicBasket becomes unmounted then mounted again (need to refresh the page to reset clicked values)
      const voteClickedAlready = clickedVotes.includes(foodId+upOrDown);
      const filteredVotes = clickedVotes.filter(vote => vote !== foodId+upOrDown)
      setClickedVotes(voteClickedAlready ? filteredVotes : [...clickedVotes, foodId+upOrDown])
     })
     
 }

  //JSX to bundle components into App + provide routing for individual pages
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/addfood">
          <AddFood onFormSubmit={handleFormSubmit}/>
        </Route>
        <Route path="/foodlist">
          <FoodList foods={foods}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
         <PicnicBasket foods={foods} onVote={handleVote} clickedVotes={clickedVotes} />
        </Route>
        <Route path="*">
          <h2>404 not found</h2>
        </Route>
        <Route path="/pizza"/>
      </Switch>
    </div>
  );
}

export default App;
