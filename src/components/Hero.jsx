import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// Import product images
import sonosBlack from "../assets/images/sonos_black.avif";
import sonosBlue from "../assets/images/sonos_blue.avif";
import sonosGreen from "../assets/images/sonos_green.avif";

// Import background images
import bgBlack from "../assets/background/bg_black.webp";
import bgBlue from "../assets/background/bg_blue.webp";
import bgGreen from "../assets/background/bg_green.webp";

const Hero = () => {
  const [selectedColor, setSelectedColor] = useState("blue"); //the default is the blue

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

  // Variants for staggered animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgrounds[selectedColor]})`,
      }}
    >
      {/* Left content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          custom={0.2}
        >
          Experience Sonos Sound Like Never Before
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.6}
        >
          Discover the perfect speaker for your space. Choose your favorite color
          and enjoy high-fidelity audio.
        </motion.p>

        <motion.div
          className="color-buttons"
          variants={fadeUp}
          custom={1}
        >
          {["blue", "green", "black"].map((color) => (
            <button
              key={color}
              className={selectedColor === color ? "active" : ""}
              onClick={() => setSelectedColor(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <img src={images[selectedColor]} alt={`Sonos ${selectedColor}`} />
      </motion.div>

      {/* Counters Section */}
      <motion.div
        className="hero-counters"
        initial="hidden"
        animate="visible"
      >
        {[
          { end: 500, label: "Happy Customers" },
          { end: 50, label: "Premium Products" },
          { end: 10, label: "Years of Experience" },
        ].map((item, index) => (
          <motion.div
            className="counter"
            key={index}
            variants={fadeUp}
            custom={2 + index * 0.5} // stagger each counter
          >
            <CountUp end={item.end} duration={3} />+
            <p>{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
