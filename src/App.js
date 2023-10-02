import React, {useState} from 'react';
import './styles/App.css'
import NoteList from './components/NoteList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function App() {
  const [notes, setNotes] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'java', body: 'Description'},
    {id: 3, title: 'javasript', body: 'Description'},
    {id: 4, title: 'c++', body: 'Description'},
  ])
  const [title, setTitle] = useState ('')
  const [body, setBody] = useState('')

  const addNewNote = (e) => {
    e.preventDefault()
    const newNote = {
      id: Date.now(), // генерируем уникальный id на основе времени
      title,
      body
    }
    console.log(newNote)
    setNotes([...notes, newNote])
    setTitle('')
    setBody('')
  }
  
  return (
    <div className="App">
      <form>
        <MyInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder='Название заметки'
        />
        <MyInput
        type="text"
        placeholder='Описание заметки'
        value={body}
        onChange={e => setBody(e.target.value)}
        />
        <MyButton onClick={addNewNote}>Сохранить заметку</MyButton>
      </form>
      <NoteList notes={notes} title={'Список заметок:'} />
    </div>
  );
}

export default App;