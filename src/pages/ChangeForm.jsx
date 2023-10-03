import React, { useState } from 'react';
import NoteChangeForm from '../components/NoteChangeForm';
import NoteService from '../API/NoteService';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ChangeForm = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const notefromlocation = location.state;

    async function ChangeNote(changedNote)  {
        console.log(changedNote.body);
        await NoteService.updateNote(changedNote.id, changedNote.title, changedNote.body);
        navigate('/notes'); // переходим обратно на основную страницу
    }

    return (
        <NoteChangeForm change={ChangeNote} _note={notefromlocation}/>
    )
}


export default ChangeForm;