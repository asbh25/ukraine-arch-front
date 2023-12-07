import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Museums } from './components/Museums';
import { Museum } from './components/Museum';
import { HistoricalBuildings } from './components/HistoricalBuildings';
import { Stadiums } from './components/Stadiums';
import { Stadium } from './components/Stadium';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Музеї</Link>
        <Link to="/historical-buildings">Історичні будівлі</Link>
        <Link to="/stadiums">Стадіони</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Museums />} />
        <Route path="/museum/:id" element={<Museum />} />
        <Route path="/historical-buildings" element={<HistoricalBuildings />} />
        <Route path="/stadiums" element={<Stadiums />} />
        <Route path="/stadium/:id" element={<Stadium />} />
        {/* Інші маршрути */}
      </Routes>
    </Router>
  );
};

export default App;
