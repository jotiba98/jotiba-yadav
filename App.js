import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Components/Header";
import Recipes from "./Components/Recipes";
import Axios from "axios";



function App() {
 
  const[search,setsearch]=useState('chicken');
  const[recipes,setRecipes]=useState([]);
  const APP_ID="e406a3f5";
  const APP_KEY="dc743cdc2495b9dbb3d3680631065ab6";

  
  
 useEffect( ()=>{
  getRecipes();
});
const getRecipes=async ()=>{
  const res=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  setRecipes(res.data.hits);
};
const onInput=(e)=>{
  setsearch(e.target.value);
};
 const onSearch=()=>{
   getRecipes();
 }
  return(
    <div className="App">
      <Header search={search} onInput={onInput} onSearch={onSearch}/>
      <div className="container">
        <Recipes recipes={recipes}/>
      </div>
      
    </div>
  );
}

export default App;
