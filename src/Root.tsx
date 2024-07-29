import React from 'react'
import App from './App.tsx'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import MenuPage from './pages/MenuPage/MenuPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const Root = () => (
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL} >
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="gallery" element={<GalleryPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

export default Root;