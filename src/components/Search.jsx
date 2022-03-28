import { useEffect, useState } from 'react';
const Search = () => {
    const App_ID= "2c7c3e0c"
    const App_Keys= process.env.REACT_APP_API_KEY
    const[recipes, setrecipe]=useState([]);
    const [query, setQuery] = useState("");
    const [search, setsearch] = useState("");
useEffect(() =>{
    getRecipes();
},[search]);
const searchsubmit=e=>{
    e.preventDefault();
    setsearch(query);
    setQuery("")
}
const getRecipes= async() =>{
const response=await fetch(
    `https://api.edamam.com/search?q=${search}&app_id=${App_ID}&app_key=${App_Keys}`
    );
   const data =await response.json()
//    console.log(data.hits)
   setrecipe(data.hits)
}
    return (
        <div id='main'>
           <div id='main-search'>
              <h1>A recipe has no soul!<br/> <span>You</span> as the cook must bring soul to the recipe.</h1>
              <div id="form-div">
                 <form className="example" onSubmit={searchsubmit}>
                     <input type="text" placeholder="Search.." name="search" onChange={(e) =>setQuery(e.target.value) }/>
                     <button type="submit"><i className="fa fa-search"></i></button>
                 </form>
              </div>
           </div>
      {recipes.map(
         recipe =>(
           <div className="card" key={Math.random()} >
               <h1>{recipe.recipe.label}</h1>
               <img src={recipe.recipe.image} alt="recipe-img" />
               <label>calories:</label>
               <p>{recipe.recipe.calories}</p>
               <label>ingredients:</label>
               <ul>{recipe.recipe.ingredients.map(
                 ingredient =>(
                  <li key={Math.random()}>{ingredient.text}</li>
                 ))}
               </ul>
           </div>
     ))}
        </div>
    );
}
 
export default Search;