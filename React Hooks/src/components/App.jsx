import React from "react";

// var count = 0;

// function increment()
// {
  // ++count;
  // console.log("I got clicked");
  //One method is to call ReactDOM.render but it is inefficient

  //suseState
  
// }

function App() {
  const [count,setCount] = React.useState(0); //Initial state in brackets

  const [red,green,blue] = [9,132,227]; 
  
  function increase(){
    setCount(count+1);
  }

  function decrease(){
    setCount(count-1);
  }
  return <div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
</div>;
}

export default App;
