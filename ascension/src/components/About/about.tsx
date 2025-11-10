import { useEffect, useState } from "react";
import styles from "./about.module.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import TitleLine from "../../assets/TitleLine.png";
import AboutTitle from "../../assets/About.png";

export default function About() {
  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);

  // Change image every 3 seconds (2 sec display + 1 sec slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // wait 3 seconds before switching
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.titleWrapper}>
        <img src={AboutTitle} alt="About Section Title" className={styles.aboutTitle} />
        <img src={TitleLine} alt="decorative line" className={styles.titleLine} />
      </div>

      <div className={styles.content}>
        <div className={styles.carousel}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${index * 697}px)`,
              transition: "transform 1s ease-in-out", 
            }}
          >
            {images.map((src, i) => (
              <img key={i} src={src} alt={`Slide ${i + 1}`} className={styles.image} />
            ))}
          </div>
        </div>

        <div className={styles.textSection}>
          <p>
            ASCENSION OF THE FORGOTTEN BY MEOWMEOW STUDIOS IS A NARRATIVE-DRIVEN
            EXPLORATION GAME THAT INVITES PLAYERS TO STEP INTO A DREAMLIKE
            PURGATORY — A LIMINAL SPACE SUSPENDED BETWEEN LIFE AND THE AFTERLIFE.
            AS A LOST SOUL BOUND BY EMOTION, YOU MUST CONFRONT THREE TRIALS
            DRAWN FROM YOUR OWN MEMORIES: HAPPINESS, SADNESS, AND ANGER. UNLIKE
            TRADITIONAL CHALLENGES, THESE TRIALS ARE NOT FOUGHT BUT FELT —
            DESIGNED TO GUIDE YOU THROUGH REFLECTION, ACCEPTANCE, AND THE ACT OF
            LETTING GO.
          </p>
          <br />
          <p>
            GUIDED BY THE THEME “LIGHT IN THE DARK,” THE GAME EXPLORES EMOTIONAL
            HEALING AND SELF-UNDERSTANDING IN A HAUNTING YET BEAUTIFUL WORLD.
            HONORED AS THE 3RD PLACE WINNER AND 2ND FAVORITE GAME OF THE JUDGES
            AT GAMES4CURE.
          </p>
        </div>
      </div>
    </div>
  );
}
