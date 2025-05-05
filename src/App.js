import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import Detalhes from './Pages/Detalhes/Detalhes';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:titulo" element={<Detalhes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
