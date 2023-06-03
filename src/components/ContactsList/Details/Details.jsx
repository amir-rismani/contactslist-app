import Avatar from "../../../images/avatar.png"

import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { useEffect, useState } from "react";
import getContact from "../../../services/getContact"

const Details = () => {
    const [contact, setContact] = useState({})
    const params = useParams();
    useEffect(() => {
        getContactDetails();
    }, []);

    const getContactDetails = async () => {
        try {
            const contactDetails = await getContact(params.id);
            setContact(contactDetails.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.details}>
            <img className="big" src={Avatar} alt={contact.name} />
            <div className={styles.fieldGroup}>
                <label>Name:</label>
                <span>{contact.name}</span>
            </div>
            <div className={styles.fieldGroup}>
                <label>Email:</label>
                <span>{contact.email}</span>
            </div>
        </div>
    );
}

export default Details;