import React, {useEffect, useState, useMemo} from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import ApiClient from '../API/src/ApiClient';
import { useNavigate } from 'react-router-dom';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';
import NoteFilter from '../components/NoteFilter';
import MyModal from '../UI/modal/MyModal';
import MyButton from '../UI/button/MyButton';
import { NoteApiApi } from '../API/src';

function Notes({func}) {
  const [notes, setNotes] = useState([])
  const [modal, setModal] = useState(false); // modal - bool, отображение модального окна

  // автоматическая загрузка всех постов при обновлении страницы
  useEffect(() => {
    console.count("UseEffect runs!")
    fetchNotes()
  }, [])

  async function createNote(newNote)  {
    const api = new NoteApiApi();
    const myPromise = new Promise((resolve, reject) => {
        api.notesPost({'note': {'Id': newNote.id, 'title': newNote.title, 'body': newNote.body}}, (err, data, responce) => {
          if (err) return reject(err)
          resolve(data)
        })
      })
    myPromise
      .then(data => {
        fetchNotes()
        setModal(false) // скрываем модельное окно, после создания заметки
      })
      .catch(err => {
        console.log(err)
      })
  }
  function fetchNotes() {
    const api = new NoteApiApi();
    const myPromise = new Promise((resolve, reject) => {
        api.notesGet((err, data, responce) => {
          if (err) return reject(err)
          resolve(data)
        })
      })
    myPromise
      .then(data => {
        setNotes(data)
      })
      .catch(err => {
        console.log(err)
      })

    // const notes = await NoteService.getALL();
    // setNotes(notes)
    // console.log('notes: ', notes)
  }

  function removeNote (note) {
    const api = new NoteApiApi();
    const myPromise = new Promise((resolve, reject) => {
        api.deleteNote(note.id, (err, data, responce) => {
          if (err) return reject(err)
          resolve()
        })
      })
      myPromise
        .then(() => {
            console.log("successful remove note from deleteNote: ")
            fetchNotes()
            //return data
        })
        .catch(err => {
          console.log(err)
        })
    
    // добавил блокирующую потоку управления задежку
    // const start = Date.now();
    // while (Date.now() - start < 1000) {}
  }

  const navigate = useNavigate();

  const change = (note) => {
    navigate('/changeform', { state: note });
    return note;
    //func(note)
  };
  
  const [filter, setFilter] = useState({sort: '', query: ''}) // для сортировки и поиска
  const sortedNotes = useMemo (() => {
    //console.log('Call getSortedNotes')
    if (filter.sort) {
      let tmp = [...notes].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      //console.log("notes_1", tmp)
      return tmp
    }
    //console.log("notes_2:", notes)
    return notes;
  }, [filter.sort, notes]) // здесь указываются зависимости, при изменении которых будет вызвана функция внути 
  // useMemo(), которая вернет отсортированный список

  const sortedAndSearchedNotes = useMemo(() => {
    //console.log('Call sortedAndSearchedNotes')
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