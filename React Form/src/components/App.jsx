import React, { useState } from "react";

function App() {

  const [name,setName] = useState("Hello");
  const [heading,setHeading] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.length);
    if(event.target.value === " ")
    {
      setName("Hello");
    }
    setName(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  function handleClick(event)
  {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
