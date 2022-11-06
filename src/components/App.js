import React, { useEffect, useState } from "react";
import {Switch, Route} from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import FoodItem from "./FoodItem";
import FoodList from "./FoodList";
import NewFoodInput from "./NewFoodInput";
import PicnicBasket from "./PicnicBasket";

/*
App
|-NavBar - (NewFoodInput, FoodList, Home/PicnicBasket)
|-FoodList
|-PicnicBasket
  |-FoodItem.map
|-NewFoodInput
*/

function App() {
  const [foods, setFoods] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:3001/foods")
    .then(resp=>resp.json())
    .then(data=>setFoods(data))
  },[])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/newfood">
          <NewFoodInput />
        </Route>
        <Route path="foodlist">
          <FoodList />
        </Route>
        <Route exact path="/">
         <PicnicBasket foods={foods}/>
        </Route>
        <Route path="*">
          <h2>404 not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
