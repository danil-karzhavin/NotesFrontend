import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, title, remove, change}) => {
    // из props вытягирваем нужное нам поле
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
        {notes.map((note, index) => 
          <NoteItem remove={remove} change={change} number={index + 1} note={note} key={note.id}/>
          )}
        </div>
    )
}

export default NoteList