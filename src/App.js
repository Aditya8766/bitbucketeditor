import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import RepositoryContent from './component/RepositoryContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/repository-content" element={<RepositoryContent/>} />
      </Routes>
    </Router>
  );
}

export default App;
