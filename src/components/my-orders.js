import React from 'react';
import './my-orders.css';  // Move your CSS here or create a new CSS file with the styles
import "./index.css";
import "./main.css";

const MyOrders = () => {
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
        <section id="orders">
          <h2>Your Orders</h2>
          <p>Here is a list of your current and past orders placed through the Bengaluru Home Chef Marketplace.</p>

          {/* Order 1 */}
          <div className="order-card">
            <h3>Order #12345</h3>
            <p><strong>Chef:</strong> Chef Priya (South Indian Cuisine)</p>
            <p><strong>Meal:</strong> Idli Sambhar</p>
            <p><strong>Price:</strong> ₹80</p>
            <p><strong>Status:</strong> <span className="status pending">Pending</span></p>
            <p><strong>Order Date:</strong> April 1, 2025</p>
            <button className="view-details">View Details</button>
          </div>

          {/* Order 2 */}
          <div className="order-card">
            <h3>Order #12346</h3>
            <p><strong>Chef:</strong> Chef Rohan (North Indian Cuisine)</p>
            <p><strong>Meal:</strong> Butter Chicken</p>
            <p><strong>Price:</strong> ₹250</p>
            <p><strong>Status:</strong> <span className="status delivered">Delivered</span></p>
            <p><strong>Order Date:</strong> March 28, 2025</p>
            <button className="view-details">View Details</button>
          </div>

          {/* Order 3 */}
          <div className="order-card">
            <h3>Order #12347</h3>
            <p><strong>Chef:</strong> Chef Neha (Italian Cuisine)</p>
            <p><strong>Meal:</strong> Spaghetti Carbonara</p>
            <p><strong>Price:</strong> ₹300</p>
            <p><strong>Status:</strong> <span className="status in-progress">In Progress</span></p>
            <p><strong>Order Date:</strong> April 2, 2025</p>
            <button className="view-details">View Details</button>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </>
  );
};

export default MyOrders;
