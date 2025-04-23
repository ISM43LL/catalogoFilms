import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Projeto from './Pages/Projetos';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projeto" element={<Projeto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;