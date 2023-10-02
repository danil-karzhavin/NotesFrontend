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
  
  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder='Название заметки'/>
        <MyInput type="text" placeholder='Описание заметки'/>
        <MyButton disabled>Сохранить заметку</MyButton>
      </form>
      <NoteList notes={notes} title={'Список заметок:'} />
    </div>
  );
}

export default App;