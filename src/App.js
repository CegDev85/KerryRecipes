import logo from './logo.svg';
import './App.css';
import RecipeContainer from './containers/RecipeContainer';
import { useState } from 'react'


function App() {

//  const [recipes, setRecipes] = useState([
//   {
//     name: "sticky bbq rub",
//     jobNumber:20045619,
//     size: 200.00,
//     machine: 6,
//     ingredients:
//         {   
//             salt:100.00,
//             sugar:40.00,
//             carmine:99.00,
//             // mustard:5,
//             milkPowder:50.99
//         }
    
// },
// {
//     name:"lemon salmon rub",
//     jobNumber:20056718,
//     size:1000.00,
//     machine:14,
//     ingredients:
//         {
//             salt:200.00,
//             lemonGranules:46.95,
//             brownSugar:200.34,
//             // milkPowder:50.99
//             eggPowder:68.90,
//             garlic:23.00,
//             onion:69.00
//         }
    
// },
// {
//     name:"spicy morrocan seas",
//     jobNumber:20048913,
//     size:198.00,
//     machine:6,
//     ingredients:
//         {
//             salt:200.00,
//             lemonGranules:46.95,
//             brownSugar:200.34,
//             // milkPowder:50.99
//             eggPowder:68.90,
//             carmine:45.86,
//             onion:50.00
//         }
    
// }
//  ])

  return (
    <div className="App">
   <RecipeContainer />
  
    </div>
  );
}

export default App;
