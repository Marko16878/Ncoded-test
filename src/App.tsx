import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home-page/home-page';
import DataPage from './pages/data-page/data-page';
import NavBar from './components/nav-bar/nav-bar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="data" element={<DataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
