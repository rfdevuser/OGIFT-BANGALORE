"use client"
import React, { useState, useEffect } from 'react';
import './DynamicHeading.css'; // Import CSS file for styling

function DynamicHeading() {
  // Array of dynamic headings
  const dynamicHeadings = [
    "Evolve with Excellence: Onati Global Institute - Your Gateway to Fashion's Ever-Shifting Landscape!",
  "Step into the World of Fashion Excellence: Onati Global Institute - Where Creativity Meets Innovation, and Dreams Take Center Stage!",
  "Embark on Your Fashion Journey with Onati: Where Passion Ignites, Skills Flourish, and Futures Shine Bright!",
  "Unlock Your Creative Potential: Onati Global Institute - Where Design Dreams Become Reality!",
  "Embrace Innovation: Onati Global Institute - Pioneering the Future of Fashion!",
  "Experience Fashion's Finest: Onati Global Institute - Where Style Meets Substance!",
  "Ignite Your Passion: Onati Global Institute - Cultivating the Next Generation of Fashion Leaders!"
  ];

  // Array of colors for headings
  const colors = ['#450a0a', '#c2410c', '#1a2e05' ,'#064e3b' ,'#4a044e','#be123c','#fde047'];

  // State to hold the current dynamic heading and index
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  // Function to update heading index
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeadingIndex(prevIndex => (prevIndex + 1) % dynamicHeadings.length);
    }, 3000); // Change heading every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Run effect only once on component mount

  return (
    <div className="heading-container">
      <h1 className="current-heading" style={{ color: colors[currentHeadingIndex] }}>
        {dynamicHeadings[currentHeadingIndex]}
      </h1>
      <h1 className="next-heading" style={{ color: colors[(currentHeadingIndex + 1) % dynamicHeadings.length] }}>
        {dynamicHeadings[(currentHeadingIndex + 1) % dynamicHeadings.length]}
      </h1>
    </div>
  );
}

export default DynamicHeading;
