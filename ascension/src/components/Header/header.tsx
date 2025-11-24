import React, { useState } from "react";
import styles from "./header.module.css";
import GapMarkers from "../../assets/GapMarkers.png";
import GameLogo from "../../assets/GameLogo2.png";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <header className={styles.backGround}>
      {/* Top bar: logo left, burger right */}
      <nav className={styles.nav}>
        <img src={GameLogo} alt="game logo" className={styles.gameLogo} />

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={handleToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          type="button"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>

      {/* Fullscreen overlay menu */}
      <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <a className={styles.headerLink} onClick={handleClose}>
          ABOUT
        </a>
        <img src={GapMarkers} alt="gap marker" className={styles.gapMarker} />

        <a className={styles.headerLink} onClick={handleClose}>
          GAME PLAY
        </a>
        <img src={GapMarkers} alt="gap marker" className={styles.gapMarker} />
        <img src={GapMarkers} alt="gap marker" className={styles.gapMarker} />

        <a className={styles.headerLink} onClick={handleClose}>
          THE TEAM
        </a>
        <img src={GapMarkers} alt="gap marker" className={styles.gapMarker} />

        <a className={styles.headerLink} onClick={handleClose}>
          PRE ORDER
        </a>
      </div>
    </header>
  );
};

export default Header;
