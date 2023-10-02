import React, {useEffect, useState} from 'react';
import './styles/App.css'
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([])

  // автоматическая загрузка всех постов при обновлении страницы
  useEffect(() => {
    fetchNotes()
  }, [])

  const createNote = (newNote) => {
    setNotes([...notes, newNote])

  }
  async function fetchNotes() {
    const response = await axios.get('http://localhost:5010/notes')
    setNotes(response.data)
  }

  const removeNote = (note) => {
    setNotes(notes.filter(n => n.id !== note.id))
  }

  
  return (
    <div className="App">
      <NoteForm create={createNote}/>
      <NoteList remove={removeNote} notes={notes} title={'Список заметок:'} />
    </div>
  );
}

export default App;