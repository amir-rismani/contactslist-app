import { useState } from "react";
import styles from "./SearchBar.module.css"
const SearchBar = ({ onSearch }) => {
    const [searchExpr, setSearchExpr] = useState('');

    const changeHandler = (event) => {
        const expr = event.target.value;
        setSearchExpr(expr);
        // onSearch(searchExpr);
        onSearch(expr);
    }

    return (<div className={styles.searchBar}>
        <input type="text" name="search" id="search" placeholder="Search..." onChange={changeHandler} />
    </div>);
}

export default SearchBar;