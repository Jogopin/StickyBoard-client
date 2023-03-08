import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MyBoards from './pages/MyBoards';
import Board from './pages/Board';

function App() {

  const API_URL = process.env.REACT_APP_API_URL
  
 
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
    
        <Route path="/myboards" element={<MyBoards />}/>       
        <Route path="/myboards/:boardId" element={<Board/>} />
      </Routes>
    </div>
  );
}

export default App;
