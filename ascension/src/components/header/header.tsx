import React, {useState} from "react";
import styles from './header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.backGround}>
            <nav>
                <ul>
                    <li><a className={styles.headerLink}>ABOUT</a></li>
                    <li><img src="assets/GapMarkers.png" alt="gap marker" /></li>
                    <li><a className={styles.headerLink}>GAME PLAY</a></li>
                    <li><img src="assets/GapMarkers.png" alt="gap marker" /></li>
                    <li><img src="assets/GameLogo.png" alt="game logo" /></li>
                    <li><img src="assets/GapMarkers.png" alt="gap marker" /></li>
                    <li><a className={styles.headerLink}>THE TEAM</a></li>
                    <li><img src="assets/GapMarkers.png" alt="gap marker" /></li>
                    <li><a className={styles.headerLink}>PRE ORDER</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;