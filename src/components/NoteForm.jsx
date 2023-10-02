import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const NoteForm = ({create}) => {
    const [note, setNote] = useState({title: '', body: ''})

    const addNewNote = (e) => {
        e.preventDefault()
        const newNote = {
            ...note, id: Date.now()
        }
        create(newNote)
        setNote({title: '', body: ''})
    }

    return (
    <form>
        <MyInput
            value={note.title}
            onChange={e => setNote({...note, title: e.target.value})}
            type="text"
            placeholder='Название заметки'
        />
        <MyInput
            type="text"
            placeholder='Описание заметки'
            value={note.body}
            onChange={e => setNote({...note, body: e.target.value})}
        />
        <MyButton onClick={addNewNote}>Сохранить заметку</MyButton>
    </form>
    )
}

export default NoteForm;