import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import About from "./About";
import FoodList from "./FoodList";
import NewFoodInput from "./NewFoodInput";
import PicnicBasket from "./PicnicBasket";

/*
App
|-NavBar - (NewFoodInput, FoodList, Home/PicnicBasket)
|-FoodList
|-PicnicBasket
  |-FoodItem.map
    |-(+Drop down showing food story)
|-NewFoodInput
*/

function App() {
  const [foods, setFoods] = useState(false)

  useEffect(()=>{
    fetch("https://phase-2-lunchbox-data.onrender.com/foods")
    .then(resp=>resp.json())
    .then(data=>setFoods(data))
  },[])

  function handleFormSubmit(newFoodObj){
    // console.log(newFoodObj)
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

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/newfood">
          <NewFoodInput onFormSubmit={handleFormSubmit}/>
        </Route>
        <Route path="/foodlist">
          <FoodList foods={foods}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
         <PicnicBasket foods={foods} />
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
