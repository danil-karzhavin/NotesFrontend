import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const NoteChangeForm = ({change, _note}) => {
    const [note, setNote] = useState({id: _note.id, title: _note.title, body: _note.body})

    const changeNote = (e) => {
        e.preventDefault()
        const changedNote = {
            ...note, // id: Date.now()
        }
        change(changedNote)
        setNote({title: '', body: ''})
    }

    return (
    <form>
        <h1>
            Страница редактирования заметки, put на сервер.
        </h1>
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
        <MyButton onClick={changeNote}>Сохранить заметку</MyButton>
    </form>
    )
}

export default NoteChangeForm;