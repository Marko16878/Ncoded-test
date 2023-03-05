import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/home-page/home-page';
import DataPage from './pages/data-page/data-page';
import NavBar from './components/nav-bar/nav-bar';
import CommentsModal from './components/comments-modal/comments-modal';
import NoPage from './pages/no-page/no-page';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="" element={<HomePage />} />
        <Route path="data" element={<DataPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <CommentsModal />
    </BrowserRouter>
  );
}

export default App;
