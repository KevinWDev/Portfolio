// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Composants / Pages
import Home from './pages/Home/index.jsx';
import Header from './components/Header'
// import Projets from './pages/Projets';
import Footer from './components/Footer';
// Styles
import './utils/styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/projets' element={<Projets />}></Route> */}
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

