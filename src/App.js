import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';
import NavBar from './components/Nav';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
