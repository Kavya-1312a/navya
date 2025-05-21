import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";

function Header() {
  return (
    <header>
      <h1><i>Bengaluru Home Chef Marketplace</i></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse-chefs">Browse Chefs</Link></li>
          <li><Link to="/browse-meals">Browse Meals</Link></li>
          <li><Link to="/become-a-chef">Become a Chef</Link></li>
          <li><Link to="/my-orders">My Orders</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><button id="chatbot-icon"><i className="fas fa-comments"></i></button></li>
          <li><Link to="/build-meal">Build Your Meal</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 