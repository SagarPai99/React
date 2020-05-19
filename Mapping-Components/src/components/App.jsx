import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
//Create Separate Entry Component
//Creat props to replace hard coded data
//Map the emojipedia  array


function createEntry(emojiTerm)
{
  return <Entry 
  key={emojiTerm.id} 
  emoji={emojiTerm.emoji} 
  name={emojiTerm.name} 
  description={emojiTerm.meaning} />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <Entry name="hjdcc" emohi="sbhdchdc" description="bdjcd" /> */}
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
