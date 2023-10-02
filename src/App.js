import React, {useState} from 'react';
import './styles/App.css'
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

function App() {
  const [notes, setNotes] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'java', body: 'Description'},
    {id: 3, title: 'javasript', body: 'Description'},
    {id: 4, title: 'c++', body: 'Description'},
  ])

  const createNote = (newNote) => {
    setNotes([...notes, newNote])

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