import React, { useEffect, useState } from "react";
import {Switch, Route} from "react-router-dom";
import '../App.css';
import NavBar from "./NavBar";
import FoodItem from "./FoodItem";
import FoodList from "./FoodList";
import NewFoodInput from "./NewFoodInput";

/*
App
|-NavBar - (NewFoodInput, FoodList, Home/PicnicBasket)
|-FoodList
  |-FoodItem
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
        <Route path="/foods">
          {foods ? foods.map(food=><FoodItem />) : <h2>Loading...</h2>}
        </Route>
        <Route path="foodlist">
          <FoodList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
