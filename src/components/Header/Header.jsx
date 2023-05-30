import Navigator from "../Navigator/Navigator";
import styles from "./Header.module.css"
const Header = () => {
    return (<header className={styles.header}>
        <h2>Contact Management</h2>
        <Navigator/>    
    </header>);
}

export default Header;