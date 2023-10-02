import React from 'react';
import MyButton from '../UI/button/MyButton';

const NoteItem = (props) => { // с помощью props передаем данные внутрь
    //console.log(props);
    return (
        <div>
            <div className="note">
        <div className='note__content'>
          <strong>{props.number}. {props.note.title}</strong>
          {/* через объект props получаем доступ к объекту note (а уже из него к title) */}
            <div>
              {props.note.body}
            </div>
          </div>
          <div className="note__btns">
            <MyButton onClick={() => props.remove(props.note)}>
              Удалить
            </MyButton>
            <MyButton onClick={() => props.change(props.note)}>
              Изменить
            </MyButton>
          </div>
      </div>
        </div>
    )
}

export default NoteItem;