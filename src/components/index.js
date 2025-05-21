import React from 'react';
import './style.css';  // <-- Import your CSS here
import "./index.css";
import "./main.css";

const HomePage = () => {
  return (
    <>
      <header>
        <h1><i>Bengaluru Home Chef Marketplace</i></h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="browse-chefs.html">Browse Chefs</a></li>
            <li><a href="browse-meals.html">Browse Meals</a></li>
            <li><a href="become-a-chef.html">Become a Chef</a></li>
            <li><a href="my-orders.html">My Orders</a></li>
            <li><a href="payment.html">Payment</a></li>
            <li><a href="location.html">Location</a></li>
            <li><a href="#" id="chatbot-icon"><i className="fas fa-comments"></i></a></li>
            <li><a href="build-meal.html">Build Your Meal</a></li>
          </ul>
        </nav>
      </header>

      <section className="parallax-section">
        <div className="parallax-content">
          <h2>Welcome to the Best Home-Cooked Meals!</h2>
          <p>Experience the flavors of authentic home-cooked dishes from expert chefs.</p>
        </div>
      </section>

      <main>
        <section id="hero">
          <div className="search-container">
            <input type="text" id="location-input" placeholder="Enter your location" />
            <button onClick={() => searchChefs()}>Search</button>
            <button onClick={() => getUserLocation()}>Use My Location</button>
          </div>
          <p id="location-status"></p>
        </section>

        <section id="featured-chefs">
          <h2>Featured Home Chefs</h2>
          <div className="chef-grid">
            <div className="chef-card">
              <img src="priya.jpg" alt="Chef Priya" />
              <h3>Chef Priya</h3>
              <p>Specializes in South Indian Cuisine</p>
              <p>★★★★☆</p>
              <p>Starting at ₹80 per meal</p>
              <a href="chef-priya.html"><button>View Profile</button></a>
            </div>

            <div className="chef-card">
              <img src="rohan.jpg" alt="Chef Rohan" />
              <h3>Chef Rohan</h3>
              <p>Specializes in North Indian Cuisine</p>
              <p>★★★★★</p>
              <p>Starting at ₹250 per meal</p>
              <a href="chef-rohan.html"><button>View Profile</button></a>
            </div>
          </div>

          <div className="view-all-chefs">
            <a href="browse-chefs.html"><button>View All Chefs</button></a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>

      <div className="chatbot-container">
        <div className="chatbot-box" id="chatbot-box">
          <div className="chatbot-header">
            <h3>HomeChef Assistant</h3>
            <button className="close-chatbot" id="close-chatbot">×</button>
          </div>
          <div className="chatbot-messages" id="chatbot-messages">
            <div className="message bot">
              Hello! I'm your HomeChef Assistant. How can I help you today?
            </div>
          </div>
          <div className="chatbot-input">
            <input type="text" id="chatbot-input" placeholder="Type your message..." />
            <button id="send-message">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
