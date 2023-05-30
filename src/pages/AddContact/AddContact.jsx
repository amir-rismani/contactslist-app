import { useState } from "react";
import styles from "./AddComment.module.css"
import { useNavigate } from "react-router-dom";
const AddContact = () => {
    const [contact, setContact] = useState({
        name: "",
        email: ""
    });
    const navigate = useNavigate();

    const changeHandler = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }

    const addHanlder = () => {
        let contacts = JSON.parse(localStorage.getItem('contacts') || [])
        contacts = [...contacts, { ...contact, id: new Date().getTime() }];
        localStorage.setItem('contacts', JSON.stringify(contacts))
        navigate('/');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!contact.name || !contact.email) {
            alert('Please enter all mandatory fields.');
            return;
        }
        addHanlder();
        setContact({
            name: "",
            email: ""
        })
    }
    return (<form onSubmit={submitHandler}>
        <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={contact.name} onChange={changeHandler} />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={contact.email} onChange={changeHandler} />
        </div>
        <div className={styles.formGroup}>
            <button type="submit">Add contact</button>
        </div>
    </form>);
}

export default AddContact;