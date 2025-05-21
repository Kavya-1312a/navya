import React from 'react';
// Import your CSS file here, e.g.:
import './ChefRohanProfile.css';
import "./index.css";
import "./main.css";

const ChefProfile = () => {
  return (
    <>
      <header>
        <h1>Bengaluru Home Chef Marketplace</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="browse-chefs.html">Browse Chefs</a></li>
            <li><a href="browse-meals.html">Browse Meals</a></li>
            <li><a href="become-a-chef.html">Become a Chef</a></li>
            <li><a href="my-orders.html">My Orders</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="chef-profile">
          <img src="rohan.jpg" alt="Chef Rohan" className="profile-img" />
          <h2>Chef Rohan</h2>
          <p><strong>Specialty:</strong> North Indian Cuisine</p>
          <p><strong>Experience:</strong> Expert in Butter Chicken, Rogan Josh, and more!</p>
          <p><strong>Ratings:</strong> ★★★★★</p>
          <p><strong>Starting Price:</strong> ₹250 per meal</p>

          <h3>Available Timings:</h3>
          <p>Chef Rohan is available for orders from:</p>
          <ul>
            <li>Monday - Friday: 12:00 PM - 9:00 PM</li>
            <li>Saturday - Sunday: 1:00 PM - 10:00 PM</li>
          </ul>

          <h3>Available Dishes:</h3>
          <div className="dish-grid">
            <div className="dish-card">
              <img src="butter-chicken.jpg" alt="Butter Chicken" />
              <h4>Butter Chicken</h4>
              <p>Delicious, creamy butter chicken served with naan or rice.</p>
              <p className="price">₹250</p>
            </div>

            <div className="dish-card">
              <img src="rogan-josh.jpg" alt="Rogan Josh" />
              <h4>Rogan Josh</h4>
              <p>Aromatic Kashmiri lamb curry with rich spices and a savory base.</p>
              <p className="price">₹300</p>
            </div>

            <div className="dish-card">
              <img src="aloo-gobi.jpg" alt="Aloo Gobi" />
              <h4>Aloo Gobi</h4>
              <p>Flavorful spiced potato and cauliflower curry.</p>
              <p className="price">₹180</p>
            </div>

            <div className="dish-card">
              <img src="paneer-tikka.jpg" alt="Paneer Tikka" />
              <h4>Paneer Tikka</h4>
              <p>Grilled cottage cheese marinated in yogurt and spices.</p>
              <p className="price">₹200</p>
            </div>

            <div className="dish-card">
              <img src="dal-makhani.jpg" alt="Dal Makhani" />
              <h4>Dal Makhani</h4>
              <p>Rich and creamy black lentils, cooked with spices and butter.</p>
              <p className="price">₹220</p>
            </div>

            <div className="dish-card">
              <img src="chole-bhature.jpg" alt="Chole Bhature" />
              <h4>Chole Bhature</h4>
              <p>Deep-fried bread served with spiced chickpea curry.</p>
              <p className="price">₹240</p>
            </div>

            <div className="dish-card">
              <img src="naan.jpg" alt="Naan" />
              <h4>Naan</h4>
              <p>Soft and fluffy Indian bread, perfect for pairing with curries.</p>
              <p className="price">₹40</p>
            </div>
          </div>

          <button>Order Now</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </>
  );
};

export default ChefProfile;
