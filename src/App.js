import './App.css';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MyBoards from './pages/MyBoards';
import Board from './pages/Board';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {

  
  
 
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
    
        <Route path="/myboards" element={<MyBoards />}/>       
        <Route path="/myboards/:boardId" element={<Board/>} />
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
    </div>
  );
}

export default App;
