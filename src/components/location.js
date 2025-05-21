import React from 'react';
import './location.css';
import "./index.css";
import "./main.css";

const BrowseChefs = () => {
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const locationParam = urlParams.get('location');

    if (locationParam) {
      const locationDisplay = document.getElementById('location-display');
      const noResults = document.getElementById('no-results');

      if (locationDisplay && noResults) {
        locationDisplay.textContent = `No chefs found near ${locationParam}`;
        noResults.style.display = 'block';
      }
    }
  }, []);

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
        <h2 id="location-display">Featured Chefs</h2>

        <div id="no-results" style={{ display: 'none', textAlign: 'center' }}>
          <p>No chefs available in this area.</p>
          <a href="location.html"><button>View All Chefs</button></a>
        </div>

        <section id="featured-chefs">
          <h2>Featured Home Chefs</h2>
          <div className="chef-grid">
            {/* Chef Cards Go Here */}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </>
  );
};

export default BrowseChefs;
