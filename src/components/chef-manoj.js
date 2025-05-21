import React from 'react';
import './ChefManojProfile.css'; // You can extract the styles here
import "./index.css";
import "./main.css";

const ChefManojProfile = () => {
  return (
    <div>
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
          <img src="manoj.jpg" alt="Chef Manoj" className="profile-img" />
          <h2>Chef Manoj</h2>
          <p><strong>Specialty:</strong> Italian Cuisine with a Modern Twist</p>
          <p><strong>Experience:</strong> Specializing in handcrafted pastas and pizzas made from the finest ingredients!</p>
          <p><strong>Ratings:</strong> ★★★★☆</p>
          <p><strong>Starting Price:</strong> ₹300 per meal</p>

          <h3>Available Timings:</h3>
          <ul>
            <li>Monday - Saturday: 12:00 PM - 10:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <h3>Available Dishes:</h3>
          <div className="dish-container">
            {[
              {
                name: 'Handcrafted Pizza',
                img: 'handcrafted-pizza.jpg',
                desc: 'Thin-crust pizza with fresh toppings like mozzarella, olives, and tomatoes.',
                price: '₹300'
              },
              {
                name: 'Lasagna',
                img: 'lasagna.jpg',
                desc: 'A classic Italian dish made with layers of pasta, meat, and cheese.',
                price: '₹400'
              },
              {
                name: 'Spaghetti Aglio e Olio',
                img: 'spaghetti-aglio-olio.jpg',
                desc: 'Spaghetti with a creamy tomato sauce and fresh basil.',
                price: '₹350'
              },
              {
                name: 'Margherita Pizza',
                img: 'margherita-pizza.jpg',
                desc: 'A classic Italian pizza with tomato sauce, mozzarella cheese, and basil.',
                price: '₹280'
              },
              {
                name: 'Tiramisu',
                img: 'tiramisu.jpg',
                desc: 'A classic Italian dessert made with ladyfingers, mascarpone cheese, and coffee.',
                price: '₹420'
              }
            ].map((dish, idx) => (
              <div className="dish-card" key={idx}>
                <img src={dish.img} alt={dish.name} />
                <p><strong>{dish.name}</strong></p>
                <p>{dish.desc}</p>
                <p className="price">{dish.price}</p>
                <button>Order Now</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </div>
  );
};

export default ChefManojProfile;