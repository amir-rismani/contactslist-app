import { useState } from "react";
import styles from "./EditContact.module.css"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import editContactItem from "../../services/editContact";

const EditContact = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        name: location.state?.name,
        email: location.state?.email
    });
    const params = useParams();
    const changeHandler = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }
    const editHanlder = async (contactId, contact) => {
        try {
            await editContactItem(contactId, contact);
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!contact.name || !contact.email) {
            alert('Please enter all mandatory fields.');
            return;
        }
        editHanlder(params.id, contact);
        setContact({
            name: "",
            email: ""
        })
    }
    <button type="submit">Edit contact</button>
    return (<><h2>Edit Contact</h2><form onSubmit={submitHandler}>
        <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={contact.name} onChange={changeHandler} />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={contact.email} onChange={changeHandler} />
        </div>
        <div className={styles.formGroup}>
            <button type="submit">Edit contact</button>
        </div>
    </form></>);
}

export default EditContact;