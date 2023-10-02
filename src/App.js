import React, {useEffect, useState} from 'react';
import './styles/App.css'
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteService from './API/NoteService';

function App() {
  const [notes, setNotes] = useState([])

  // автоматическая загрузка всех постов при обновлении страницы
  useEffect(() => {
    fetchNotes()
  }, [])

  async function createNote(newNote)  {
    //setNotes([...notes, newNote])
    await NoteService.createNote(newNote.title, newNote.body);
    const notes = await NoteService.getALL();
    setNotes(notes)

  }
  async function fetchNotes() {
    const notes = await NoteService.getALL();
    setNotes(notes)
  }

  async function removeNote (note) {
    await NoteService.deleteNote(note.id);
    const notes = await NoteService.getALL();
    setNotes(notes)
  }

  // async function change(note){
  //   await NoteService.updateNote(note.id, note.title, note.body)
  //   const notes = await NoteService.getALL();
  //   setNotes(notes)
  // }

  
  return (
    <div className="App">
      <NoteForm create={createNote}/>
      <NoteList remove={removeNote} notes={notes} title={'Список заметок:'} />
    </div>
  );
}

export default App;