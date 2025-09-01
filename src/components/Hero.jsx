import React, { useState } from "react";

// Import product images
import sonosBlack from "../assets/images/sonos_black.avif";
import sonosBlue from "../assets/images/sonos_blue.avif";
import sonosGreen from "../assets/images/sonos_green.avif";

// Import background images
import bgBlack from "../assets/background/bg_black.png";
import bgBlue from "../assets/background/bg_blue.jpg";
import bgGreen from "../assets/background/bg_green.png";

const Hero = () => {
  const [selectedColor, setSelectedColor] = useState("blue"); // default blue

  // Map colors to product images
  const images = {
    black: sonosBlack,
    blue: sonosBlue,
    green: sonosGreen,
  };

  // Map colors to background images
  const backgrounds = {
    black: bgBlack,
    blue: bgBlue,
    green: bgGreen,
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgrounds[selectedColor]})`,
      }}
    >
      <div className="hero-content">
        <h1>Experience Sonos Sound Like Never Before</h1>
        <p>
          Discover the perfect speaker for your space. Choose your favorite color
          and enjoy high-fidelity audio.
        </p>

        <div className="color-buttons">
          {["blue", "green", "black"].map((color) => (
            <button
              key={color}
              className={selectedColor === color ? "active" : ""}
              onClick={() => setSelectedColor(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-image">
        <img src={images[selectedColor]} alt={`Sonos ${selectedColor}`} />
      </div>
    </section>
  );
};

export default Hero;
