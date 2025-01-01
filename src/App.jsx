import { useState } from 'react';
import './App.css'
import AddNewNote from './components/AddNewNote/AddNewNote'
import NoteList from './components/NoteList/NoteList'

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter(item => item.id != id));
  }

  const handleCompletedNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes(prevNotes => prevNotes.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note));
  }

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList notes={notes} onDeleteNote={handleDeleteNote} onCompletedNote={handleCompletedNote} />
        </div>
      </div>
    </div>
  )
}

export default App
