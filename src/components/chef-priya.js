import React from "react";
import "./ChefPriyaProfile.css";
import "./index.css";
import "./main.css";

const dishes = [
  {
    img: "idli-sambhar.jpg",
    alt: "Idli Sambhar",
    title: "Idli Sambhar",
    desc: "A classic South Indian breakfast with soft idlis and tangy sambhar.",
    price: "₹80",
  },
  {
    img: "dosa-chutney.jpg",
    alt: "Dosa with Coconut Chutney",
    title: "Dosa with Coconut Chutney",
    desc: "Thin, crispy dosa served with flavorful coconut chutney and sambhar.",
    price: "₹90",
  },
  {
    img: "vada-sambar.jpg",
    alt: "Vada with Sambar",
    title: "Vada with Sambar",
    desc: "Crispy vadas served with a bowl of delicious sambar.",
    price: "₹75",
  },
  {
    img: "pongal.jpg",
    alt: "Ven Pongal",
    title: "Ven Pongal",
    desc: "A savory South Indian rice dish made with rice, moong dal, and black pepper.",
    price: "₹120",
  },
  {
    img: "masala-dosa.jpg",
    alt: "Masala Dosa",
    title: "Masala Dosa",
    desc: "Large crispy dosa stuffed with spiced mashed potatoes, served with chutney and sambhar.",
    price: "₹100",
  },
  {
    img: "upma.jpg",
    alt: "Upma",
    title: "Upma",
    desc: "Fluffy and savory semolina dish with vegetables and spices.",
    price: "₹70",
  },
  {
    img: "uttapam.jpg",
    alt: "Uttapam",
    title: "Uttapam",
    desc: "Thick pancake-like dish made from fermented rice and lentil batter, topped with vegetables.",
    price: "₹95",
  },
];

const ChefPriyaProfile = () => {
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
          <img src="priya.jpg" alt="Chef Priya" className="profile-img" />
          <h2>Chef Priya</h2>
          <p><strong>Specialty:</strong> South Indian Cuisine</p>
          <p><strong>Experience:</strong> Over 10 years of experience in preparing authentic dishes like Idli, Dosa, and more.</p>
          <p><strong>Ratings:</strong> ★★★★☆</p>
          <p><strong>Starting Price:</strong> ₹80 per meal</p>

          <h3>Available Timings:</h3>
          <p>Chef Priya is available for orders from:</p>
          <ul>
            <li>Monday - Friday: 7:00 AM - 2:00 PM</li>
            <li>Saturday - Sunday: 8:00 AM - 1:00 PM</li>
          </ul>

          <h3>Available Dishes:</h3>
          <div className="dish-grid">
            {dishes.map(({ img, alt, title, desc, price }) => (
              <div className="dish-card" key={title}>
                <img src={img} alt={alt} />
                <h4>{title}</h4>
                <p>{desc}</p>
                <p className="price">{price}</p>
                <button>Order Now</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </>
  );
};

export default ChefPriyaProfile;
