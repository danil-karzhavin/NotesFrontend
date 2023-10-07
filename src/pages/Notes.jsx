import React, {useEffect, useState, useMemo} from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import NoteService from '../API/NoteService';
import { useNavigate } from 'react-router-dom';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';

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
  
  const [selectedSort, setSelectedSort] = useState('') // в selectedSort хранится либо title, либо body
  const [searchQuery, setSearchQuery] = useState('')

  const sortedNotes = useMemo (() => {
    console.log(' вызов getSortedNotes')
    if (selectedSort) {
      return [...notes].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return notes;
  }, [selectedSort, notes]) // здесь указываются зависимости, при изменении которых будет вызвана функция внути 
  // useMemo(), которая вернет отсортированный список

  const sortedAndSearchedNotes = useMemo(() => {
    console.log('Call sortedAndSearchedNotes')
    return sortedNotes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase())) // поиск по заколовкам
  }, [searchQuery, sortedNotes])

  const sortNotes = (sort) => {
    setSelectedSort(sort);
    //console.log(sort);
    //setNotes();
  } 
  return (
    <div className="App">
      <NoteForm create={createNote}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск по названию'
        />
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
      {sortedAndSearchedNotes.length !== 0
      ? <NoteList remove={removeNote} change={change} notes={sortedAndSearchedNotes} title={'Список заметок:'} />
      : <h1 style={{textAlign: 'center'}}>Заметки не найдены!</h1>
      }
      
    </div>
  );
}

export default Notes;