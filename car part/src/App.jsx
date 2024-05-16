import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Search from "./Components/Search/Search.jsx";
import Trending from "./Components/Trending/Trending.jsx";
import Sellers from "./Components/Sellers/Sellers.jsx";
import Auction from "./Components/Auction/Auction.jsx";
import Review from "./Components/Review/Review.jsx";
import Signup from "./Signup.jsx";
import Login from './Login';
import Footer from "./Components/Footer/Footer.jsx"; // Import Footer component

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
