import { useEffect, useState } from "react";
import styles from "./about.module.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import TitleLine from "../../assets/TitleLine.png";
import AboutTitle from "../../assets/About.png";

const images = [img1, img2, img3, img4];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.titleWrapper}>
        <img src={AboutTitle} alt="About Section Title" className={styles.aboutTitle} />
        <img src={TitleLine} alt="" className={styles.titleLine} />
      </div>

      <div className={styles.content}>
        <div className={styles.carousel}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Game preview ${i + 1}`}
                className={styles.image}
                aria-hidden={index !== i}
              />
            ))}
          </div>
        </div>

        <div className={styles.textSection}>
          <p>
            ASCENSION OF THE FORGOTTEN BY MEOWMEOW STUDIOS IS A NARRATIVE-DRIVEN
            EXPLORATION GAME THAT INVITES PLAYERS TO STEP INTO A DREAMLIKE
            PURGATORY — A LIMINAL SPACE SUSPENDED BETWEEN LIFE AND THE AFTERLIFE.
            AS A LOST SOUL BOUND BY EMOTION, YOU MUST CONFRONT THREE TRIALS
            DRAWN FROM YOUR OWN MEMORIES.
          </p>

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
