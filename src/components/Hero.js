import React, { useState } from 'react';
import "./main.css";

function Hero() {
  const [location, setLocation] = useState('');
  const [locationStatus, setLocationStatus] = useState('');

  const handleSearch = () => {
    if (location.trim()) {
      setLocationStatus(`Searching for chefs in ${location}...`);
      // TODO: Implement search functionality
    }
  };

  const handleUseMyLocation = () => {
    setLocationStatus('Getting your location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationStatus('Location found! Searching for nearby chefs...');
          // TODO: Implement location-based search
        },
        (error) => {
          setLocationStatus('Error getting location. Please enter manually.');
        }
      );
    } else {
      setLocationStatus('Geolocation is not supported by your browser.');
    }
  };

  return (
    <section id="hero">
      <div className="search-container">
        <input
          type="text"
          id="location-input"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleUseMyLocation}>Use My Location</button>
      </div>
      <p id="location-status">{locationStatus}</p>
    </section>
  );
}

export default Hero; 