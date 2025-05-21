import React, { useState, useEffect } from 'react';
import './BrowseChefs.css';
import "./index.css";
import "./main.css";

const chefs = [
  {
    name: 'Chef Priya',
    image: '/priya.jpg',
    description: 'Specializes in South Indian Cuisine. With over 10 years of experience in preparing authentic dishes like Idli, Dosa, and more.',
    rating: '★★★★☆',
    price: '₹80',
    href: '/chef-priya.html'
  },
  {
    name: 'Chef Rohan',
    image: '/rohan.jpg',
    description: 'Expert in North Indian cuisine, specializing in Butter Chicken, Rogan Josh, and more!',
    rating: '★★★★★',
    price: '₹250',
    href: '/chef-rohan.html'
  },
  {
    name: 'Chef Neha',
    image: '/neha.jpg',
    description: 'Passionate about vegan cooking. Offering plant-based meals that are both healthy and delicious!',
    rating: '★★★☆☆',
    price: '₹150',
    href: '/chef-neha.html'
  },
  {
    name: 'Chef Manoj',
    image: '/manoj.jpg',
    description: 'Specializing in Italian dishes with a modern twist. Enjoy handcrafted pastas and pizzas made from the finest ingredients!',
    rating: '★★★★☆',
    price: '₹300',
    href: '/chef-manoj.html'
  },
  {
    name: 'Chef Anita',
    image: '/anita.jpg',
    description: 'Expert in authentic Punjabi cuisine, specializing in rich and flavorful dishes like Chole Bhature and Sarson Da Saag.',
    rating: '★★★★☆',
    price: '₹180',
    href: '/chef-anita.html'
  }
];

const BrowseChefs = () => {
  const [search, setSearch] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [filteredChefs, setFilteredChefs] = useState(chefs);

  useEffect(() => {
    const filterChefs = () => {
      const query = search.toLowerCase();
      const cuisineFilter = cuisine.toLowerCase();
      const dietFilter = diet.toLowerCase();

      const result = chefs.filter(({ name, description }) => {
        const nameMatch = name.toLowerCase().includes(query);
        const descMatch = description.toLowerCase().includes(query);
        const matchesCuisine = cuisineFilter ? description.toLowerCase().includes(cuisineFilter) : true;
        const matchesDiet = dietFilter ? description.toLowerCase().includes(dietFilter) : true;

        return (nameMatch || descMatch) && matchesCuisine && matchesDiet;
      });

      setFilteredChefs(result);
    };

    filterChefs();
  }, [search, cuisine, diet]);

  return (
    <div>
      <header>
        <h1>Bengaluru Home Chef Marketplace</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse-chefs">Browse Chefs</Link></li>
            <li><Link to="/browse-meals">Browse Meals</Link></li>
            <li><Link to="/become-a-chef">Become a Chef</Link></li>
            <li><Link to="/my-orders">My Orders</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Browse All Chefs</h2>
        <p>Here you can browse all the chefs available on the platform and find the one that suits your tastes and preferences!</p>

        <section id="filters">
          <h3>Filter Chefs</h3>
          <div className="filter-section">
            <input
              type="text"
              placeholder="Search by name, cuisine, or dish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
              <option value="">Select Cuisine</option>
              <option value="indian">Indian</option>
              <option value="italian">Italian</option>
              <option value="vegan">Vegan</option>
              <option value="halal">Halal</option>
            </select>
            <select value={diet} onChange={(e) => setDiet(e.target.value)}>
              <option value="">Select Dietary Preferences</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="keto">Keto</option>
              <option value="gluten-free">Gluten-Free</option>
            </select>
          </div>
        </section>

        <section id="chef-grid">
          <div className="chef-grid">
            {filteredChefs.map((chef, index) => (
              <div className="chef-card" key={index}>
                <a href={chef.href}>
                  <img src={chef.image} alt={chef.name} />
                  <div className="info">
                    <h3>{chef.name}</h3>
                    <p>{chef.description}</p>
                    <p className="ratings">{chef.rating}</p>
                    <p className="price">Starting at {chef.price} per meal</p>
                  </div>
                </a>
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

export default BrowseChefs;
