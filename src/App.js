import './App.css';
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Pricecard from './Components/Pricecard';
import { useState } from "react";
import Footer  from './Components/Footer';

function App() {

  //Cart functionality
  const [isVisible, setIsVisible] = useState(true);

  //For disabling functionality
  const [isButtonDisabled, setButtonDisabled] = useState(false);

   //Cart functionality
   let [Count, setCount] = useState(0);
   const CartHandler = ()=>{
     setCount(Count=Count+1);
   }
   
  
 
   //datas for the cards
   return (
    <>
    <Navigation count={Count} cartHandler={CartHandler} isVisible={isVisible} setIsVisible={setIsVisible}/> 
    <Banner/>
    <Pricecard count={Count} cartHandler={CartHandler} isVisible={isVisible} isDisable={isButtonDisabled}/>
    <Footer/>
    </>
   );
 }
 

export default App;
