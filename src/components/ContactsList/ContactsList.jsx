import Contact from "./Contact/Contact";

const ContactsList = ({ contacts, onDelete }) => {
    let renderList = <p>Contacts are loading...</p>
    if (!contacts.length)
        renderList = <p>Contact not exist...</p>
    else
        renderList = <div>
            <h2>Contacts List</h2>
            {contacts.map(contact => <Contact key={contact.id} contact={contact} onDelete={onDelete} />)}
        </div>

    return renderList;
}

export default ContactsList;