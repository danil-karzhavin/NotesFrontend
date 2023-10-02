import React, {useState} from 'react';
import Counter from "./components/Counter";
import СlassCounter from "./components/СlassCounter";
import './styles/App.css'
import NoteItem from './components/NoteItem';

function App() {

  
  return (
    <div className="App">
      <NoteItem note={{id: 1, title: 'Python', body: 'Description'}} />
      {/* note передается в параметр props компонента NoteItem */}
    </div>
  );
}

export default App;