import React from 'react';
import './ChefAnitaProfile.css';
import "./index.css";
import "./main.css";

const ChefAnitaProfile = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.logo}>Bengaluru Home Chef Marketplace</h1>
        <nav>
          <ul style={styles.navList}>
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
          <img src="anita.jpg" alt="Chef Anita" className="profile-img" />
          <h2>Chef Anita</h2>
          <p><strong>Specialty:</strong> Authentic Punjabi Cuisine</p>
          <p><strong>Experience:</strong> Specializing in rich and flavorful dishes like Chole Bhature and Sarson Da Saag.</p>
          <p><strong>Ratings:</strong> ★★★★☆</p>
          <p><strong>Starting Price:</strong> ₹180 per meal</p>

          <h3>Available Timings:</h3>
          <ul>
            <li>Monday - Friday: 11:00 AM - 3:00 PM</li>
            <li>Saturday - Sunday: 12:00 PM - 4:00 PM</li>
          </ul>

          <h3>Available Dishes:</h3>
          <div className="dish-container">
            {dishes.map((dish, idx) => (
              <div className="dish-card" key={idx}>
                <img src={dish.image} alt={dish.name} />
                <p><strong>{dish.name}</strong></p>
                <p>{dish.description}</p>
                <p className="price">₹{dish.price}</p>
                <button>Order Now</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </div>
  );
};

const dishes = [
  {
    name: 'Chole Bhature',
    image: 'chole-bhature.jpg',
    description: 'Classic Punjabi dish of spicy chickpeas served with fluffy fried bread (bhature).',
    price: 180,
  },
  {
    name: 'Sarson Da Saag with Makki Di Roti',
    image: 'sarson-da-saag.jpg',
    description: 'Traditional Punjabi dish made with mustard greens and served with makki di roti (corn flatbread).',
    price: 150,
  },
  {
    name: 'Amritsari Macchi',
    image: 'amritsari-macchi.jpg',
    description: 'A classic Punjabi dish made with spiced chickpeas and a creamy tomato sauce.',
    price: 180,
  },
  {
    name: 'Paneer Tikka',
    image: 'paneer-tikka.jpg',
    description: 'Grilled cottage cheese marinated in yogurt and spices.',
    price: 160,
  },
  {
    name: 'Gajar Halwa',
    image: 'gajar-halwa.jpg',
    description: 'A traditional Punjabi dessert made with sweet potatoes and milk.',
    price: 150,
  },
];

const styles = {
  header: {
    background: 'rgba(51, 51, 51, 0.8)',
    color: 'white',
    padding: '1em 2em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
    color: 'rgb(20, 221, 37)',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5em',
    padding: 0,
    margin: 0,
  },
  footer: {
    background: 'rgba(51, 51, 51, 0.8)',
    color: 'white',
    textAlign: 'center',
    padding: '1em 0',
    marginTop: '2em',
  },
};

export default ChefAnitaProfile;
