import React, {useEffect, useState, useMemo} from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import NoteService from '../API/NoteService';
import { useNavigate } from 'react-router-dom';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';
import NoteFilter from '../components/NoteFilter';
import MyModal from '../UI/modal/MyModal';
import MyButton from '../UI/button/MyButton';

function Notes({func}) {
  const [notes, setNotes] = useState([])
  const [modal, setModal] = useState(false); // modal - bool, отображение модального окна

  // автоматическая загрузка всех постов при обновлении страницы
  useEffect(() => {
    fetchNotes()
  }, [])

  async function createNote(newNote)  {
    //setNotes([...notes, newNote])
    await NoteService.createNote(newNote.title, newNote.body);
    const notes = await NoteService.getALL();
    setNotes(notes)
    setModal(false) // скрываем модельное окно, после создания заметки

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
  
  const [filter, setFilter] = useState({sort: '', query: ''}) // для сортировки и поиска
  const sortedNotes = useMemo (() => {
    console.log('Call getSortedNotes')
    if (filter.sort) {
      return [...notes].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return notes;
  }, [filter.sort, notes]) // здесь указываются зависимости, при изменении которых будет вызвана функция внути 
  // useMemo(), которая вернет отсортированный список

  const sortedAndSearchedNotes = useMemo(() => {
    console.log('Call sortedAndSearchedNotes')
    return sortedNotes.filter(note => note.title.toLowerCase().includes(filter.query.toLowerCase())) // поиск по заколовкам
  }, [filter.query, sortedNotes])

  return (
    <div className="App">
      <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
        Создать заметку
      </MyButton>
      <MyModal visible={modal} >
        <NoteForm create={createNote}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <NoteFilter filter={filter} setFilter={setFilter} />
      <NoteList remove={removeNote} change={change} notes={sortedAndSearchedNotes} title={'Список заметок:'} />
    </div>
  );
}

export default Notes;