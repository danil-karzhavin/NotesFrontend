import React, {useEffect, useState} from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import NoteService from '../API/NoteService';
import { useNavigate } from 'react-router-dom';
import MySelect from '../UI/select/MySelect';

function Notes({func}) {
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

  const change = (note) => {
    navigate('/changeform', { state: note });
    return note;
    //func(note)
  };
  
  const [selectedSort, setSelectedSort] = useState('')

  const sortNotes = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
    setNotes([...notes].sort((a, b) => a[sort].localeCompare(b[sort])));
  } 
  return (
    <div className="App">
      <NoteForm create={createNote}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value = {selectedSort}
          onChange={sortNotes}
          defaultValue='Сортировка по'
          options={[
            {value: 'title', name:'По названию'},
            {value: 'body', name:'По содержимому'}
          ]}
        />
      </div>
      {notes.length !== 0
      ? <NoteList remove={removeNote} change={change} notes={notes} title={'Список заметок:'} />
      : <h1 style={{textAlign: 'center'}}>Заметки не найдены!</h1>
      }
      
    </div>
  );
}

export default Notes;