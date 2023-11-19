// src/App.js
import React from 'react';
import './App.css';
import ImageCarousel from './components/ImageCarousel';

function App() {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      <h1>Image Carousel Example</h1>
      <ImageCarousel images={images} />
    </div>
  );
}

export default App;
