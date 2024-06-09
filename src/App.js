import React from 'react';
import { Route, Routes, HashRouter, NavLink, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Service from './Service';
import Payment from './Payment';


function App() {
  return (
    <>
      <HashRouter>
        <NavLink style={{ textDecoration: 'none' }}>
          <nav class="navbar navbar-expand-lg navbar-light display-nav text-center">
            <div><img src='../Images/logo.png' style={{ height: '80px', width: '80px' }} alt='...'/><p style={{color:'var(--third)'}}>GetCar.com</p></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse collapse-list" id="navbarNav">
              <ul class="navbar-nav m-5">
                <li class="nav-item active m-2">
                  <Link className="links" to="/">Home</Link>
                </li>
                <li class="nav-item m-2">
                  <Link className="links" to="/about">About</Link>
                </li>
                <li class="nav-item m-2">
                  <Link className="links" to="/service">Service</Link>
                </li>
                <li class="nav-item m-2">
                  <Link className="links" to="/payment">Payment</Link>
                </li>
              </ul>
            </div>
          </nav>
        </NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </HashRouter>
      <div className='container-fluid'>
        <Footer />
        
      </div>
    </>
  );
}

export default App;