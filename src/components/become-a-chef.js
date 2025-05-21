import React, { useState } from "react";
import "./Becomechef.css";
import "./index.css";
import "./main.css";

export default function BecomeChef() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    experience: "",
    bio: "",
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...formData };
      const response = await fetch("http://localhost:5000/api/chefs/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Your application has been submitted successfully!");
        window.location.href = "/";
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting your application. Please try again.");
    }
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <header className="bg-orange-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Bengaluru Home Chef Marketplace</h1>
        <nav className="mt-2">
          <ul className="flex justify-center gap-6 text-white font-semibold">
            <li><a href="/">Home</a></li>
            <li><a href="/browse-chefs">Browse Chefs</a></li>
            <li><a href="/browse-meals">Browse Meals</a></li>
            <li><a href="/become-a-chef">Become a Chef</a></li>
            <li><a href="/my-orders">My Orders</a></li>
          </ul>
        </nav>
      </header>

      <main className="px-6 py-8">
        <section className="text-center bg-orange-200 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Become a Home Chef</h2>
          <p>Share your passion for cooking and join our growing community!</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">How It Works</h3>
          <ul className="list-disc list-inside">
            <li><strong>Sign Up:</strong> Create your profile with details.</li>
            <li><strong>Set Your Menu:</strong> Add your best dishes and pricing.</li>
            <li><strong>Start Cooking:</strong> Accept orders once approved.</li>
            <li><strong>Earn Money:</strong> Get paid for each meal you serve.</li>
          </ul>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Sign Up to Become a Chef</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-bold" htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block font-bold" htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block font-bold" htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block font-bold" htmlFor="specialty">Cuisine Specialty:</label>
              <select id="specialty" name="specialty" required value={formData.specialty} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="">Select a cuisine</option>
                <option value="North Indian">North Indian</option>
                <option value="South Indian">South Indian</option>
                <option value="Italian">Italian</option>
                <option value="Vegan">Vegan</option>
                <option value="Punjabi">Punjabi</option>
              </select>
            </div>

            <div>
              <label className="block font-bold" htmlFor="experience">Cooking Experience (in years):</label>
              <input type="number" id="experience" name="experience" required value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block font-bold" htmlFor="bio">Short Bio:</label>
              <textarea id="bio" name="bio" rows="4" required value={formData.bio} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
            </div>

            <div>
              <label className="block font-bold" htmlFor="profile-photo">Upload a Profile Photo:</label>
              <input type="file" id="profile-photo" name="profilePhoto" accept="image/*" onChange={handleChange} className="w-full" />
            </div>

            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Submit Application</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>&copy; 2025 Bengaluru Home Chef Marketplace</p>
      </footer>
    </div>
  );
}


