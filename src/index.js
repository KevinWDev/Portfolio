// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Composants / Pages
import Home from './pages/Home/index.jsx';
import Header from './components/Header'
import Projets from './pages/Projets';
import Footer from './components/Footer';
import Contact from './pages/Contact/index.jsx';
import Error from './pages/Error/index.jsx';
import Infos from './pages/Infos/index.jsx';
// Styles
import './utils/styles/index.css';
// 404
const is404Page = window.location.pathname === '/404.html'

// Root
const root = ReactDOM.createRoot(document.getElementById('root'));

if (is404Page) {
  root.render(<Error />)
} else {
  root.render(
    <React.StrictMode>
      <Router basename='/Portfolio'>
        <Header />
        <Routes> 
            <Route path='/' element={<Home />}></Route>
            <Route path='/projets' element={<Projets />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/infos/:id/' element={<Infos />}></Route>
            <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
      
    </React.StrictMode>
  );
}



