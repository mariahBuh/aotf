import React from "react";
import styles from "./footer.module.css";
import GameLogo from "../../assets/GameLogo.png";


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <h2 className={styles.footerLogo}>
              <img
                src={GameLogo}
                alt="Meow Meow Studios Logo"
                className={styles.footerLogo}
              />
            </h2>
            <p className={styles.footerQuote}>
              IN THE LIGHT WE FIND WHAT THE DARKNESS TRIED TO HIDE
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>ABOUT</h3>
              <ul>
                <li>
                  <a href="#">Meow Meow Studios</a>
                </li>
                <li>
                  <a href="#">Roles</a>
                </li>
                <li>
                  <a href="#">Productions</a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>TOOLS</h3>
              <ul>
                <li>
                  <a href="#">Unreal Engine</a>
                </li>
                <li>
                  <a href="#">Figma</a>
                </li>
                <li>
                  <a href="#">Blender</a>
                </li>
                <li>
                  <a href="#">Ableton</a>
                </li>
                <li>
                  <a href="#">Mocap</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>RESOURCES</h3>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 MEOW MEOW STUDIOS</p>
          <p className={styles.footerLegal}>
            ALL CONTENT, GAME TITLES, TRADE NAMES AND/OR TRADE DRESS,
            TRADEMARKS, ARTWORK, AND ASSOCIATED IMAGERY ARE TRADEMARKS AND/OR
            COPYRIGHT MATERIAL OF THEIR RESPECTIVE OWNERS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
