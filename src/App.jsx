import { useState } from 'react';
import './App.css'
import AddNewNote from './components/AddNewNote/AddNewNote'
import NoteList from './components/NoteList/NoteList'
import NoteStatus from './components/NoteStatus/NoteStatus';
import NoteHeader from './components/NoteHeader/NoteHeader';

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

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

  let sortedNotes = notes;
  if (sortBy === "earliest") sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  if (sortBy === "latest") sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (sortBy === "completed") sortedNotes = [...notes].sort((a, b) => Number(b.completed) - Number(a.completed));


  return (
    <div className="container">
      <NoteHeader notes={notes} sortBy={sortBy} onSort={e => setSortBy(e.target.value)} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList notes={sortedNotes} onDeleteNote={handleDeleteNote} onCompletedNote={handleCompletedNote} />
        </div>
      </div>
    </div>
  )
}

export default App
