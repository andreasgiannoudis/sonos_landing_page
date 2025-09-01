import React from "react";
import { motion } from "framer-motion";
import videoSrc from "../assets/videos/sonos_demo.mp4";

const VideoSection = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="video-player-section">
      {/* Animated heading above the video */}
      <motion.h2
        className="video-text"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        Experience Sound Like Never Before
      </motion.h2>

      {/* Video player */}
      <div className="video-wrapper">
        <video
          src={videoSrc}
          controls
          poster="" // optional poster image
          width="100%"
        />
      </div>
    </section>
  );
};

export default VideoSection;
