import React, { useState } from "react";

function App() {

  // const [fName,setfName] = useState("");
  // const [lName,setlName] = useState("");
  const [fullName,setFullName] = useState({
    fName: "",
    lName: ""
  });
  
  // function updateFName(events) {
  //   const firstName = events.target.value;
  //   setfName(firstName);
  // }

  // function updateLName(events) {
  //   const lastName = events.target.value;
  //   setlName(lastName);
  // }

  function handleChange(event)
  {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const {value: newValue, name: inputName} = event.target;

    setFullName( prevValue => {
       if(inputName === "fName"){
         return {
           fName: newValue,
           lName: prevValue.lName
         }
       } else if(inputName === "lName") {
         return {
           fName: prevValue.fName,
           lName: newValue
         }
       } 
    });
    // if(inputName === "fName") {
    //   setFullName({fName: newValue,lName: fullName.lName});
      
    // } else if(inputName === "lName"){
    //   setFullName({fName: fullName.fName,lName: newValue});
    // }


  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName} />
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
