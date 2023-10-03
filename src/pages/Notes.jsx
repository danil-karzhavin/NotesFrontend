import React, {useEffect, useState} from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import NoteService from '../API/NoteService';
import { useNavigate } from 'react-router-dom';

function Notes() {
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

  const navigate = useNavigate();

  const change = () => {
    navigate('/changeform');
  };
  
  return (
    <div className="App">
      <NoteForm create={createNote}/>
      <NoteList remove={removeNote} change={change} notes={notes} title={'Список заметок:'} />
    </div>
  );
}

export default Notes;