import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgramProvider } from './contexts/ProgramContext';
import Home from './views/Home';
import About from './views/About';
import LoginPage from './views/Login';
import InfoSection from './views/InfoSection';
import Dashboard from './views/Dashboard';
import Workshop from './views/Workshop';

import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ProgramProvider> {/* O ProgramProvider deve envolver todas as rotas */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/lessons" element={<InfoSection />} />
          <Route path="workshop/info/lessons" element={<Dashboard />} />
        </Routes>
      </ProgramProvider>
    </Router>
  );
};

export default App;
