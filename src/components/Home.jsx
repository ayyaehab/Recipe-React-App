import { useNavigate } from 'react-router-dom'
import image from "../images/undraw_breakfast_psiw.svg";
const Home = () => {  
const navigate = useNavigate()
function handleClick() {
    navigate('/search')
  }
    return ( 
        <div id="container">
        <div id="content-container">
           <h1>Recipes Guide</h1>
           <p id="p1">A recipe is a story that ends with a good meal.
           </p>
           <button onClick={handleClick}>Go To Search</button>
           <p id="p2"> Search for your recipe</p>
        </div>
        <div id="bg-container">
           <img src={image} alt="landing-img"/>
        </div>
     </div>
     );
}
 
export default Home;


