import Contact from "../../components/Contact/Contact";
import { useEffect, useState } from "react";
import getContacts from "../../services/getContacts";
import deleteContact from "../../services/deleteContact";

const ContactsList = () => {
    const [contacts, setContacts] = useState([])

    const getAllContacts = async () => {
        try {
            const { data } = await getContacts();
            setContacts(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllContacts();
    }, [])

    const deleteHanlder = async (contactId) => {
        await deleteContact(contactId);
        getAllContacts();
    }

    let renderList = <p>Contacts are loading...</p>
    if (!contacts.length)
        renderList = <p>Contact not exist...</p>
    else
        renderList = <div>
            <h2>Contacts List</h2>
            {contacts.map(contact => <Contact key={contact.id} contact={contact} onDelete={deleteHanlder} />)}
        </div>

    return renderList;
}

export default ContactsList;