import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';
import NavBar from './components/Nav';
import Home from './components/Home';
import Myself from './components/Myself';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/mathmagicians" element={<Home />} exact />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Myself" element={<Myself />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
