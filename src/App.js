import './App.css';
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Pricecard from './Components/Pricecard';
import { useState } from "react";

function App() {

  //Cart functionality
  let [Count, setCount] = useState(0);
  const CartHandler = ()=>{
    setCount(Count=Count+1);
  }


  //datas for the cards
  return (
   <>
   <Navigation count={Count} cartHandler={CartHandler}/> 
   <Banner/>
   <Pricecard count={Count} cartHandler={CartHandler}/>
   </>
  );
}

export default App;
