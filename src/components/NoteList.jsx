import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, title}) => {
    // из props вытягирваем нужное нам поле
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
        {notes.map(note => 
        <div>
          <NoteItem note={note} key={note.id}/>
          {/* В компонент NoteItem передается объект note, key нужен для работы react должен быть статичным и уник. для каждого элемента */}
        </div>)}
        </div>
    )
}

export default NoteList