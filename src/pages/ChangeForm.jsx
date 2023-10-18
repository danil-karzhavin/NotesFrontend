import React, { useState } from 'react';
import NoteChangeForm from '../components/NoteChangeForm';
//import NoteService from '../API/NoteService';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NoteApiApi } from '../API/src';

const ChangeForm = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const notefromlocation = location.state;

    function ChangeNote(changedNote)  {
        const api = new NoteApiApi();
        const myPromise = new Promise((resolve, reject) => {
        api.updateNote({'note': {'Id': changedNote.id, 'title': changedNote.title, 'body': changedNote.body}}, (err, data, responce) => {
          if (err) return reject(err)
          resolve()
        })
      })
    myPromise
      .then(() => {
        navigate('/notes'); // переходим обратно на основную страницу
      })
      .catch(err => {
        console.log(err)
      })
        // console.log(changedNote.body);
        // await NoteService.updateNote(changedNote.id, changedNote.title, changedNote.body);
        // navigate('/notes'); // переходим обратно на основную страницу
    }

    return (
        <NoteChangeForm change={ChangeNote} _note={notefromlocation}/>
    )
}


export default ChangeForm;