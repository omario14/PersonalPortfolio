
import React from 'react';
import './App.css';

import Nav from './pages/Navigation/nav';
import Home from './pages/home';
import Footer from './pages/Footer/footer';

function App() {
  return (
  <div className="App">
    <Nav/>
    <Home/>
    <Footer/>
  </div>
    
  );
}

export default App;
