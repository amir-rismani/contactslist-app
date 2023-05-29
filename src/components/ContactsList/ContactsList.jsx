import Contact from "./Contact/Contact";
import styles from "./ContactsList.module.css"
const ContactsList = ({ contacts, onDelete }) => {

    let renderList = <p>Contacts are loading...</p>
    if (!contacts.length)
        renderList = <p>Contact not exist...</p>
    else
        renderList = <div>
            {contacts.map(contact => <Contact contact={contact} onDelete={onDelete} />)}
        </div>

    return renderList;
}

export default ContactsList;