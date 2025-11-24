import { useState } from "react";
import styles from "./team.module.css";

import mireya from "../../assets/mireya.png";
import josef from "../../assets/josef.png";
import adam from "../../assets/adam.png";

import leftButton from "../../assets/left button.png";
import rightButton from "../../assets/rignt button.png";

import TeamTitle from "../../assets/Team.png";
import TitleLine from "../../assets/TitleLine.png";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  avatar: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "MIREYA VELLA",
    role: "ART DIRECTION • NARRATIVE • 3D ASSETS",
    description:
      "Mireya brought the world of Ascension of the Forgotten to life through expressive character art, environment concepts, and emotional storytelling. Her direction shaped the dreamlike tone of the game, balancing light and darkness in both the visuals and the narrative.",
    avatar: mireya,
  },
  {
    name: "JOSEF CARL MUSCAT",
    role: "PROGRAMMING • GAMEPLAY • SYSTEMS",
    description:
      "Josef built the core systems of Ascension of the Forgotten, crafting the moment-to-moment gameplay, interaction logic, and scene flow. From player movement to memory triggers, he ensured the world felt responsive, stable, and immersive.",
    avatar: josef,
  },
  {
    name: "ADAM DARMANIN",
    role: "SOUND DESIGN • 3D MODELLING • VFX",
    description:
      "Adam shaped the audio and atmosphere of Ascension of the Forgotten with ambient soundscapes, sound effects, and 3D props. His work supported the emotional beats of each trial, reinforcing the themes of loss, memory, and light.",
    avatar: adam,
  },
];

export default function Team() {
  const [index, setIndex] = useState(0);

  const showPrevious = () => {
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const showNext = () => {
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const current = teamMembers[index];

  return (
    <section id="team" className={styles.teamContainer}>
      {/* Title + underline */}
      <div className={styles.titleWrapper}>
        <img src={TeamTitle} className={styles.titleImage} />
        <img src={TitleLine} className={styles.titleLine} />
      </div>

      {/* Carousel */}
      <div className={styles.carouselWrapper}>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.left}`}
          onClick={showPrevious}
          aria-label="Previous team member"
        >
          <img src={leftButton} alt="" aria-hidden="true" />
        </button>

        <div className={styles.card}>
          <div className={styles.avatarWrapper}>
            <img
              src={current.avatar}
              alt={current.name}
              className={styles.avatar}
            />
          </div>

          <div className={styles.textWrapper}>
            <h3 className={styles.name}>{current.name}</h3>
            <p className={styles.role}>{current.role}</p>
            <p className={styles.description}>{current.description}</p>
          </div>
        </div>

        <button
          type="button"
          className={`${styles.arrowButton} ${styles.right}`}
          onClick={showNext}
          aria-label="Next team member"
        >
          <img src={rightButton} alt="" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}