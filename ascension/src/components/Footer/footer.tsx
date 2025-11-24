import React from "react";
import styles from "./footer.module.css";
import GameLogo from "../../assets/GameLogo.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.background}></div>
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
              IN THE LIGHT WE FIND WHAT THE DARKNESS TRIES TO HIDE
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>ABOUT</h3>
              <ul>
                <br></br>
                  <a href="#">Meow Meow Studios</a>
                
                <br></br>
                  <a href="#">Roles</a>
                
                <br></br>
                  <a href="#">Productions</a>
                
                <br></br>
                  <a href="#">History</a>
                
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>TOOLS</h3>
              <ul>
                <br></br>
                  <a href="#">Unreal Engine</a>
                
                <br></br>
                  <a href="#">Figma</a>
                
                <br></br>
                  <a href="#">Blender</a>
                
                <br></br>
                  <a href="#">Ableton</a>
                
                <br></br>
                  <a href="#">Mocap</a>
                
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>RESOURCES</h3>
              <ul>
                <br></br>
                  <a href="#">Terms of Use</a>
                
                <br></br>
                  <a href="#">Cookie Policy</a>
                
                <br></br>
                  <a href="#">Privacy Policy</a>
                
                <br></br>
                  <a href="#">Support</a>
                
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2025 MEOW MEOW STUDIOS</p>
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
