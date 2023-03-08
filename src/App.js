import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './geral.css';
import React from 'react';
import Movies from './components/Movies';
import Header from './components/Header';
import Contato from './components/Contato';
import Movie from './components/Movie';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="contato" element={<Contato />} />
          <Route path="movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
