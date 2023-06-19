import React, { useState } from 'react';
import './index.css';


function App() {    //theres a function, which is a function component, can be whatever you want, header, main, nav, anything
    const [count, setCount] = useState(0);  //give it its state, useState give us two values, see notes
    const [donuts, setDonuts] = useState("Donuts");

›
    function  decrementCount() {
      setCount(previousCount => previousCount - 1);  // we are calling setCount and setting it to another function previousCount minus 1
      setDonuts("Less Donut") 
    }

    function incrementCount () {
      setCount(previousCount => previousCount + 1);  //again calling setCount, we are setting it to the previousCount function to increment the count plus 1
      setDonuts("More Donut");
    }

  return (  
    <>
    <div id="container">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>  
      <span>{donuts}</span>
      <button onClick={incrementCount}>+</button>  
    </div>

    <img src="./images/donuts.jpg" alt="donuts" id="yummyDonuts"></img>

    </>  //To make the buttons functional (functionality), need to import the useState hook we are going to use, this is line 1, import hook from react, then lines 6 and 7
      ) //last curly of the return
} //last curly of the function 

export default App




//Notes - - - Youtube Video
  //so it looks like we are doing everything inside the function component App(),
  //the actual javascript code is at the top of the function component, before the return



  //Hooks 
  //you can only use hooks inside of function components! Not a class
  //hooks must execute in the same order
  //react will catch errors if use state are in
       // ....if statement, functions like regular functions
  //useState hook should be at the top level of the function component before the return 

  //useState always give us back an array with two values (line 6). The first one is your current state, second one...
     //is a function that will update the state when called
  
  //so whenever we call our useState, aka our update function, its going to re-render our component, with the new value of our count

  //when you update the state the component re-renders the whole thing

  //you can also inside of your use state, line 6, you can call a function, and object, and probably everything else

  //you can add more then one use State, line 7
    //makes things easier if you have more states, doing a certain thing 
    //in this case adding the text "More Donuts", "Less Donuts"





