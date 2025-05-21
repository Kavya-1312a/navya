import React from 'react';
import './ChefNehaProfile.css';
import "./index.css";
import "./main.css";

const ChefNehaProfile = () => {
  return (
    <>
      <header>
        <h1>Bengaluru Home Chef Marketplace</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/browse-chefs">Browse Chefs</a></li>
            <li><a href="/browse-meals">Browse Meals</a></li>
            <li><a href="/become-a-chef">Become a Chef</a></li>
            <li><a href="/my-orders">My Orders</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="chef-profile">
          <img src="neha.jpg" alt="Chef Neha" className="profile-img" />
          <h2>Chef Neha</h2>
          <p><strong>Specialty:</strong> Vegan Cuisine</p>
          <p><strong>Experience:</strong> Passionate about vegan cooking. Offering plant-based meals that are both healthy and delicious!</p>
          <p><strong>Ratings:</strong> ★★★☆☆</p>
          <p><strong>Starting Price:</strong> ₹150 per meal</p>

          <h3>Available Timings:</h3>
          <ul>
            <li>Monday - Friday: 10:00 AM - 2:00 PM</li>
            <li>Saturday - Sunday: 11:00 AM - 3:00 PM</li>
          </ul>

          <h3>Available Dishes:</h3>
          <div className="dish-container">
            <div className="dish-card">
              <img src="vegan-burrito-bowl.jpg" alt="Vegan Burrito Bowl" />
              <p><strong>Vegan Burrito Bowl</strong></p>
              <p>A wholesome and nutritious plant-based burrito bowl filled with rice, beans, veggies, and salsa.</p>
              <p className="price">₹150</p>
              <button>Order Now</button>
            </div>

            <div className="dish-card">
              <img src="chickpea-salad.jpg" alt="Chickpea Salad" />
              <p><strong>Chickpea Salad</strong></p>
              <p>A refreshing salad with chickpeas, veggies, and a zesty lemon dressing.</p>
              <p className="price">₹120</p>
              <button>Order Now</button>
            </div>

            <div className="dish-card">
              <img src="tofu-stir-fry.jpg" alt="Tofu Stir Fry" />
              <p><strong>Tofu Stir Fry</strong></p>
              <p>Stir-fried tofu with a mix of colorful veggies and a savory sauce.</p>
              <p className="price">₹180</p>
              <button>Order Now</button>
            </div>

            <div className="dish-card">
              <img src="vegan-pancakes.jpg" alt="Vegan Pancakes" />
              <p><strong>Vegan Pancakes</strong></p>
              <p>Soft and fluffy vegan pancakes served with your choice of toppings.</p>
              <p className="price">₹100</p>
              <button>Order Now</button>
            </div>

            <div className="dish-card">
              <img src="vegan-buddha-bowl.jpg" alt="Vegan Buddha Bowl" />
              <p><strong>Vegan Buddha Bowl</strong></p>
              <p>A wholesome and nutritious plant-based bowl filled with rice, beans, veggies, and a flavorful sauce.</p>
              <p className="price">₹200</p>
              <button>Order Now</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </>
  );
};

export default ChefNehaProfile;
