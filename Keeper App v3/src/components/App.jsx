import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] = useState([]);

  function addNote(note) {
    console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes,note];
    });
  }

  function deleteNote(id) {
    setNotes( prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteitem,index) => {
        return <Note key={index} id={index} title={noteitem.title} content={noteitem.content} onDelete={deleteNote}/>;
      })}

      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
