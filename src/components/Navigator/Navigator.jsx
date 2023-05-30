import { NavLink } from "react-router-dom";
import styles from "./Navigator.module.css"
const navItem = [
    { path: '/', title: 'Contats' },
    { path: '/add-contact', title: 'Add Contat' },
]
const Navigator = () => {
    return (
        <nav>
            <ul>
                {navItem.map(navItem => <li key={navItem.path}><NavLink className={(data) => data.isActive ? styles.active : ''} to={navItem.path}>{navItem.title}</NavLink></li>)}
            </ul>
        </nav>
    );
}

export default Navigator;