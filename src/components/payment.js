import React, { useState, useEffect } from 'react';
import './payment.css'; // Make sure this file contains your styles
import "./index.css";
import "./main.css";

const PaymentPage = () => {
  const [mealPrice, setMealPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(mealPrice * quantity);
  }, [mealPrice, quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const paymentMode = e.target['payment-mode'].value;

    alert(`Thank you, ${name}! Your order of ₹${total.toFixed(2)} has been placed successfully. Payment Mode: ${paymentMode}`);

    // Redirect to homepage
    window.location.href = "index.html";
  };

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
        <section id="payment-form">
          <h2>Order Payment</h2>
          <form id="orderForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="address">Delivery Address:</label>
            <textarea id="address" name="address" rows="3" required></textarea>

            <label htmlFor="meal-price">Meal Price (₹):</label>
            <input
              type="number"
              id="meal-price"
              name="meal-price"
              value={mealPrice}
              onChange={(e) => setMealPrice(parseFloat(e.target.value) || 0)}
              required
            />

            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              required
            />

            <label htmlFor="payment-mode">Mode of Payment:</label>
            <select id="payment-mode" name="payment-mode" required>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
            </select>

            <div id="total-amount">
              <strong>Total Amount: ₹<span>{total.toFixed(2)}</span></strong>
            </div>

            <button type="submit">Confirm Payment</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </>
  );
};

export default PaymentPage;
