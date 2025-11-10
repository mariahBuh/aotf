import { useEffect, useState } from "react";
import styles from "./gameplay.module.css";

// Import gameplay images
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";


import TitleLine from "../../assets/TitleLine.png";
import GameplayTitle from "../../assets/Gameplay.png";

export default function Gameplay() {
  const images = [img5, img6, img7, img8];
  const [index, setIndex] = useState(0);

  // Switch every 3s (2 s display + 1 s transition)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.gameplayContainer}>
      {/* Header */}
      <div className={styles.titleWrapper}>
        <img
          src={GameplayTitle}
          alt="Gameplay Title"
          className={styles.gameplayTitle}
        />
        <img
          src={TitleLine}
          alt="decorative line"
          className={styles.titleLine}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Text on the left */}
        <div className={styles.textSection}>
          <p>
            STEP INTO THE WORLD OF ASCENSION OF THE FORGOTTEN WITH SIMPLE,
            INTUITIVE CONTROLS DESIGNED FOR CALM EXPLORATION AND EMOTIONAL
            DISCOVERY.
          </p>

          <ul>
            <li>WASD — MOVE THE PLAYER</li>
            <li>MOUSE — LOOK AROUND</li>
            <li>TOUCH GLOWING OBJECTS — TRIGGER MEMORIES AND PROGRESS THE STORY</li>
          </ul>

          <p>
            EACH INTERACTION DRAWS YOU CLOSER TO UNCOVERING THE PAST AND FINDING
            PEACE WITHIN THE LIGHT.
          </p>
        </div>

        {/* Carousel on the right */}
        <div className={styles.carousel}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${index * 697}px)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gameplay ${i + 1}`}
                className={styles.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
