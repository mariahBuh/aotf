import React from "react";
import styles from "./hero.module.css";
import video from "../../assets/GameTrailer.mp4";
import preorder from "../../assets/preorder button.png";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroContainer}>
      {/* Video + top overlay */}
      <div className={styles.videoWrapper}>
        <video
          className={styles.heroVideo}
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Gradient band on top of video */}
        <div className={styles.gradientOverlay}>
          <div className={styles.heroContent}>
            <p className={styles.heroText}>DISCOVER THE FORGOTTEN</p>

            <button className={styles.preorderButton}>
              <img src={preorder} alt="Pre-order now" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
