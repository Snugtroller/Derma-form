import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './components/page';
import Pagecomponents from './components/pagecomponents';
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/confirmation" element={<Pagecomponents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
