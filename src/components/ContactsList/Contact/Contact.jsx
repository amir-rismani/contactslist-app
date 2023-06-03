import { BiTrash } from "react-icons/bi";
import styles from "./Contact.module.css"
import Avatar from "../../../images/avatar.png"
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
    return (<div className={styles.contactItem}>
        <div className={styles.contactInfo}>
            <img src={Avatar} alt={contact.name} />
            <Link to={`/contact/${contact.id}`}>
                <div className={styles.meta}>
                    <span>{contact.name}</span>
                    <span>{contact.email}</span>
                </div>
            </Link>
        </div>
        <div className={styles.action}>
            <span onClick={() => onDelete(contact.id)}><BiTrash className={styles.delete} /></span>
        </div>
    </div>);
}

export default Contact;