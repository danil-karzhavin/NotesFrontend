import React, {useEffect, useState} from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChangeForm from './pages/ChangeForm';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/changeform" element={<ChangeForm />} />
        <Route path="/notes" element={<Notes />}/>
      </Routes>
    </Router>
  );
}

export default App;