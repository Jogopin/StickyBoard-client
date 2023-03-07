import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MyBoards from './pages/MyBoards';

function App() {

  const API_URL = process.env.REACT_APP_API_URL
  
 
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/boards" element={<MyBoards/>}/>
      </Routes>
    </div>
  );
}

export default App;
