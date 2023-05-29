import { BiTrash } from "react-icons/bi";
import styles from "./Contact.module.css"
import Avatar from "../../../images/avatar.png"
const Contact = ({ contact, onDelete }) => {
    return (<div className={styles.contactItem}>
        <div className={styles.contactInfo}>
            <img src={Avatar} alt={contact.name} />
            <div className={styles.meta}>
                <span>{contact.name}</span>
                <span>{contact.email}</span>
            </div>
        </div>
        <div className={styles.action}>
            <span onClick={() => onDelete(contact.id)}><BiTrash className={styles.delete} /></span>
        </div>
    </div>);
}

export default Contact;