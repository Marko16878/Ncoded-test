import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/home-page/home-page';
import DataPage from './pages/data-page/data-page';
import CommentsModal from './components/modal/comments-modal/comments-modal';
import NoPage from './pages/no-page/no-page';
import HOCNavBar from './HOC/hoc-nav-bar/hoc-nav-bar';
import PostsLoader from './components/loader/posts-loader/posts-loader';

function App() {
  return (
    <BrowserRouter>
      <HOCNavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="" element={<HomePage />} />
        <Route path="data" element={<DataPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <CommentsModal />
      <PostsLoader />
    </BrowserRouter>
  );
}

export default App;
