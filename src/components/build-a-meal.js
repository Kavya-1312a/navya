import React, { useState } from 'react';
import './BuildYourOwnMeal.css'; 
import "./index.css";
import "./main.css";   

const BuildYourOwnMeal = () => {
  const [base, setBase] = useState('');
  const [proteins, setProteins] = useState([]);
  const [veggies, setVeggies] = useState([]);
  const [extras, setExtras] = useState([]);
  const [summary, setSummary] = useState(null);

  const handleCheckboxChange = (value, setter, state) => {
    if (state.includes(value)) {
      setter(state.filter(item => item !== value));
    } else {
      setter([...state, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const summaryHtml = (
      <div>
        <h2>Your Custom Meal:</h2>
        <p><b>Main Base:</b> {base || 'None'}</p>
        <p><b>Proteins:</b> {proteins.length ? proteins.join(', ') : 'None'}</p>
        <p><b>Veggies:</b> {veggies.length ? veggies.join(', ') : 'None'}</p>
        <p><b>Extras:</b> {extras.length ? extras.join(', ') : 'None'}</p>
      </div>
    );
    setSummary(summaryHtml);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Build Your Own Meal</h1>
      <form onSubmit={handleSubmit}>
        <label>Main Base:</label><br />
        <select value={base} onChange={e => setBase(e.target.value)} required>
          <option value="">-- Select Base --</option>
          <option value="rice">Rice</option>
          <option value="bread">Bread</option>
          <option value="pasta">Pasta</option>
        </select><br /><br />

        <label>Choose Proteins:</label><br />
        {['chicken', 'paneer', 'tofu', 'egg'].map(p => (
          <div key={p}>
            <input
              type="checkbox"
              checked={proteins.includes(p)}
              onChange={() => handleCheckboxChange(p, setProteins, proteins)}
            /> {p.charAt(0).toUpperCase() + p.slice(1)}
          </div>
        ))}
        <br />

        <label>Choose Veggies:</label><br />
        {['carrot', 'peas', 'corn', 'spinach'].map(v => (
          <div key={v}>
            <input
              type="checkbox"
              checked={veggies.includes(v)}
              onChange={() => handleCheckboxChange(v, setVeggies, veggies)}
            /> {v.charAt(0).toUpperCase() + v.slice(1)}
          </div>
        ))}
        <br />

        <label>Extras:</label><br />
        {['cheese', 'sauce', 'spices'].map(e => (
          <div key={e}>
            <input
              type="checkbox"
              checked={extras.includes(e)}
              onChange={() => handleCheckboxChange(e, setExtras, extras)}
            /> {e.charAt(0).toUpperCase() + e.slice(1)}
          </div>
        ))}
        <br />

        <button type="submit">Order Meal</button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        {summary}
      </div>
    </div>
  );
};

export default BuildYourOwnMeal;
