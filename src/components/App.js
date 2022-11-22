import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Foods from "./Foods";
import AddFood from "./AddFood";
import Home from "./Home";
import Food from "./Food";

function App() {
  
  const [foods, setFoods] = useState(false)
  const [clickedVotes, setClickedVotes] = useState([])

  const history = useHistory();
  
  useEffect(()=>{
    fetch("https://phase-2-lunchbox-data.onrender.com/foods")
    .then(resp=>resp.json())
    .then(data=>setFoods(data))
  },[])

  function handleFormSubmit(newFoodObj){
    fetch("https://phase-2-lunchbox-data.onrender.com/foods",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newFoodObj)
    })
    .then(resp=>resp.json())
    .then(data=>{
      setFoods([...foods, data]);
      history.push("/")
    })
  }

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
      
      const voteClickedAlready = clickedVotes.includes(foodId+upOrDown);
      const filteredVotes = clickedVotes.filter(vote => vote !== foodId+upOrDown)
      setClickedVotes(voteClickedAlready ? filteredVotes : [...clickedVotes, foodId+upOrDown])
     })
     
 }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/foods/new" >
          <AddFood onFormSubmit={handleFormSubmit}/>
        </Route>
        <Route exact path="/foods">
          <Foods foods={foods}/>
        </Route>
        <Route path="/foods/:id">
          <Food foods={foods} onVote={handleVote} clickedVotes={clickedVotes}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
         <Home foods={foods} onVote={handleVote} clickedVotes={clickedVotes} />
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
