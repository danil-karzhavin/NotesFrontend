const REMOVE_NOTE = "REMOVE_NOTE"
const SET_NOTES = "SET_NOTES"

const defaultState = {
    notes: []
  }
  // action = {type: "", note: "?"}
  // промежуточная функция, чечерз которую происходит изменение состояния

export const notesReducer = (state = defaultState, action) =>{ // состояние и действие над этим состоянием
    switch (action.type) {
        case SET_NOTES:
            return {...state, notes: [...action.notes]} // по умолчниют state в redux - неизменяемое, поэтому каждый раз возвращаем новый объект
        case REMOVE_NOTE:
            return {...state, notes: state.notes.filter(note => note !== action.note)}
        default:
            return state
    }
  }
// дополнительные промежуточные функции для добавления и удаления пользователей
export const setNotesAction = (notes) => ({type: SET_NOTES, notes: notes})
export const removeNoteAction = (note) => ({type: REMOVE_NOTE, note: note})