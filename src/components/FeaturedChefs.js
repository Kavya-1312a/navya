import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";

function FeaturedChefs() {
  const chefs = [
    {
      id: 1,
      name: 'Chef Priya',
      image: '/priya.jpg',
      specialty: 'South Indian Cuisine',
      rating: '★★★★☆',
      price: '₹80 per meal',
      profileLink: '/chef-priya'
    },
    {
      id: 2,
      name: 'Chef Rohan',
      image: '/rohan.jpg',
      specialty: 'North Indian Cuisine',
      rating: '★★★★★',
      price: '₹250 per meal',
      profileLink: '/chef-rohan'
    }
  ];

  return (
    <section id="featured-chefs">
      <h2>Featured Home Chefs</h2>
      <div className="chef-grid">
        {chefs.map(chef => (
          <div key={chef.id} className="chef-card">
            <img src={chef.image} alt={chef.name} />
            <h3>{chef.name}</h3>
            <p>{chef.specialty}</p>
            <p>{chef.rating}</p>
            <p>Starting at {chef.price}</p>
            <Link to={chef.profileLink}>
              <button>View Profile</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="view-all-chefs">
        <Link to="/browse-chefs">
          <button>View All Chefs</button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedChefs; 