import './App.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedChefs from './components/FeaturedChefs';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="app-container" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/backgroundmain.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <Header />
      
      <section className="parallax-section">
        <div className="parallax-content">
          <h2>Welcome to the Best Home-Cooked Meals!</h2>
          <p>Experience the flavors of authentic home-cooked dishes from expert chefs.</p>
        </div>
      </section>
      
      <main>
        <Hero />
        <FeaturedChefs />
      </main>

      <footer>
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;