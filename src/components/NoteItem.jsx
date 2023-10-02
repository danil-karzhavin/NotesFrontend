import React from 'react';

const NoteItem = (props) => { // с помощью props передаем данные внутрь
    //console.log(props);
    return (
        <div>
            <div className="note">
        <div className='note__content'>
          <strong>{props.note.id}. {props.note.title}</strong>
          {/* через объект props получаем доступ к объекту note (а уже из него к title) */}
            <div>
              {props.note.body}
            </div>
          </div>
          <div className="note__btns">
            <button>Delete</button>
          </div>
      </div>
        </div>
    )
}

export default NoteItem;