import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./component/NoteList";
import Header from "./component/Header"

const App = () => {
  const [notes, setNotes] = useState([
    {
    id : nanoid(),
    text: 'This is my first note!',
    date : "08/05/2024",
    },

    {
    id : nanoid(),
    text: 'This is my second note!',
    date : "08/05/2024",
    },

    {
    id : nanoid(),
    text: 'This is my third note!',
    date : "08/05/2024",
    }, 
    {
    id : nanoid(),
    text: 'This is my fourth note!',
    date : "08/05/2024",
    } 
]);

const [darkMode, setDarkMode] = useState(false)

const addNote = (text) => {
 const date = new Date()
 const newNote ={
  id: nanoid(),
  text: text,
  date: date.toLocaleDateString(),
 }
 const newNotes = [...notes, newNote]
 setNotes(newNotes)
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id)
  setNotes(newNotes)
} 
  return(
  <div className={`${darkMode `$$ dark-mode`}`}>
    <div className="container">
      <Header handleToDarkMode={setDarkMode}/>
      <NoteList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  </div>
  )
};

export default App;
