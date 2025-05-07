import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Count from './Count.jsx';
import LoginPage from './LoginPage.jsx';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/Count" element={<Count  />} />
  </Routes>

    </div>
  );
}

export default App;
