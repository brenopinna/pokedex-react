import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header/index'
import { Container } from '../components/Main/styles';
import Home from '../pages/Home';
import Details from '../pages/Details';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home />}
          />
          <Route
            path="/:name"
            element={<Details />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
