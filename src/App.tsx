import './App.css';
import Home from './pages/Home/Home.jsx';
import CreateTest from './pages/CreateTest/CreateTest.jsx';
import TakeTest from './pages/TakeTest/TakeTest.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <> <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/test/*" element={<TakeTest />} />
    <Route path="/create" element={<CreateTest />} />
  </Routes></>
   
  );
}

export default App;
