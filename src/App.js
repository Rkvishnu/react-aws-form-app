 // App.js

import React, { useState } from 'react';
import './App.css';
import api from '../src/api/api';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the API endpoint
    fetch(`${api}/submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Form submission response:', data);
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          location: ''
        });
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Cloud Collections</h1>
      </header>
      <main className="main-content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
