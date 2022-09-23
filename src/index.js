import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Navbar from './components/Navbar';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import './App.css';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route index element={<TodoContainer />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
