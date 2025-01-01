import { useState } from 'react';
import './App.css'
import AddNewNote from './components/AddNewNote/AddNewNote'
import NoteList from './components/AddNewNote/NoteList/NoteList'

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <NoteList notes={notes} />
      </div>
    </div>
  )
}

export default App
