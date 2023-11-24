import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import WhoWeAre from './components/WhoWeAre';
import Featured from './components/Featured';
import More from './components/More';
import MakeYourSelf from './components/MakeYourSelf';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/dashboard';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <WhoWeAre />
        <Featured />
        <More />
        <MakeYourSelf />
        <Footer />
      </div>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

