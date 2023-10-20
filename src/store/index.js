import {legacy_createStore, combineReducers} from "redux";
import { notesReducer } from "./notesReducer";

const rootReducer = combineReducers({
    notes: notesReducer,
})

export const store = legacy_createStore(rootReducer)