import React from "react";
import styles from './header.module.css';
import GapMarkers from '../../assets/GapMarkers.png';
import GameLogo from '../../assets/GameLogo.png';

const Header: React.FC = () => {
    return (
        <header className={styles.backGround}>
            <nav>
                <ul>
                    <li><a className={styles.headerLink}>ABOUT</a></li>
                    <li><img src={GapMarkers} alt="gap marker" className={styles.gapMarker}/></li>
                    <li><a className={styles.headerLink}>GAME PLAY</a></li>
                    
                    
                    <li><img src={GapMarkers}  alt="gap marker" className={styles.gapMarker}/></li>
                    <li><img src={GameLogo} alt="game logo" className={styles.gameLogo}/></li>
                    <li><img src={GapMarkers}  alt="gap marker" className={styles.gapMarker}/></li>
                    
                    <li><a className={styles.headerLink}>THE TEAM</a></li>
                    <li><img src={GapMarkers}  alt="gap marker" className={styles.gapMarker}/></li>
                    <li><a className={styles.headerLink}>PRE ORDER</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;