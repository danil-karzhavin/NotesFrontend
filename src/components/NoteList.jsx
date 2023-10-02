import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, title, remove}) => {
    // из props вытягирваем нужное нам поле
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
        {notes.map((note, index) => 
          <NoteItem remove={remove} number={index + 1} note={note} key={note.id}/>
          )}
        </div>
    )
}

export default NoteList