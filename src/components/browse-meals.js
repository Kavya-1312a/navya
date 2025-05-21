import React, { useState } from 'react';
import './BrowseMeals.css';
import "./index.css";
import "./main.css";

const mealsData = [
  {
    name: 'Idli Sambhar',
    description: 'Classic South Indian breakfast - Soft steamed idlis served with hot sambhar and coconut chutney.',
    price: 80,
    image: 'idli-sambhar.jpg',
  },
  {
    name: 'Dosa with Coconut Chutney',
    description: 'Crispy dosa served with tangy coconut chutney and flavorful sambhar.',
    price: 90,
    image: 'dosa-chutney.jpg',
  },
  {
    name: 'Vada with Sambar',
    description: 'Crispy vadas served with delicious sambar and chutney.',
    price: 75,
    image: 'vada-sambar.jpg',
  },
  {
    name: 'Butter Chicken',
    description: 'Succulent chicken pieces cooked in a creamy tomato-based gravy.',
    price: 250,
    image: 'butter-chicken.jpg',
  },
  {
    name: 'Rogan Josh',
    description: 'Rich and flavorful Kashmiri mutton curry cooked with aromatic spices.',
    price: 300,
    image: 'rogan-josh.jpg',
  },
  {
    name: 'Aloo Gobi',
    description: 'A comforting vegetarian dish made with potatoes and cauliflower, cooked in a blend of spices.',
    price: 180,
    image: 'aloo-gobi.jpg',
  },
  {
    name: 'Vegan Burrito Bowl',
    description: 'A wholesome and nutritious plant-based burrito bowl filled with rice, beans, veggies, and salsa.',
    price: 150,
    image: 'vegan-burrito-bowl.jpg',
  },
  {
    name: 'Chickpea Salad',
    description: 'A refreshing salad with chickpeas, veggies, and a zesty lemon dressing.',
    price: 120,
    image: 'chickpea-salad.jpg',
  },
  {
    name: 'Tofu Stir Fry',
    description: 'Stir-fried tofu with a mix of colorful veggies and a savory sauce.',
    price: 180,
    image: 'tofu-stir-fry.jpg',
  },
  {
    name: 'Handcrafted Pizza',
    description: 'Thin-crust pizza with fresh toppings like mozzarella, olives, and tomatoes.',
    price: 300,
    image: 'handcrafted-pizza.jpg',
  },
  {
    name: 'Handcrafted Pasta',
    description: 'Delicious pasta made with fresh ingredients and served with a creamy sauce.',
    price: 350,
    image: 'lasagna.jpg',
  },
  {
    name: 'Chole Bhature',
    description: 'Classic Punjabi dish of spicy chickpeas served with fluffy fried bread (bhature).',
    price: 180,
    image: 'chole-bhature.jpg',
  },
  {
    name: 'Sarson Da Saag',
    description: 'Traditional Punjabi dish made with mustard greens and served with makki di roti (corn flatbread).',
    price: 150,
    image: 'sarson-da-saag.jpg',
  },
];

const BrowseMeals = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeals = mealsData.filter(meal =>
    meal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('backgroundmain.png')" }}>
      <header className="bg-red-700 bg-opacity-90 text-white py-4 text-center shadow-md">
        <h1 className="text-2xl font-bold">Bengaluru Home Chef Marketplace</h1>
        <nav className="mt-2">
          <ul className="flex justify-center gap-6">
            <li><a href="/" className="hover:text-yellow-200">Home</a></li>
            <li><a href="/browse-chefs" className="hover:text-yellow-200">Browse Chefs</a></li>
            <li><a href="/browse-meals" className="hover:text-yellow-200">Browse Meals</a></li>
            <li><a href="/become-a-chef" className="hover:text-yellow-200">Become a Chef</a></li>
            <li><a href="/my-orders" className="hover:text-yellow-200">My Orders</a></li>
          </ul>
        </nav>
      </header>

      <main className="text-center py-10 px-4">
        <h2 className="text-3xl font-bold mb-2 text-white">Browse All Meals</h2>
        <p className="text-lg text-white mb-6">Explore a wide variety of delicious meals prepared by expert chefs!</p>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for dishes..."
            className="p-2 w-64 rounded border border-gray-300 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredMeals.map((meal, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-200">
              <img src={meal.image} alt={meal.name} className="w-full h-48 object-cover border-b-4 border-red-300" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-600 mb-2">{meal.name}</h3>
                <p className="text-gray-700 mb-2">{meal.description}</p>
                <p className="text-red-600 text-lg font-bold mb-4">₹{meal.price}</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 bg-opacity-80 text-white text-center py-4 mt-10">
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </div>
  );
};

export default BrowseMeals;