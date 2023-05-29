import { useEffect, useState } from "react";
import AddContact from "../../components/AddContact/AddContact";
import ContactsList from "../../components/ContactsList/ContactsList";

const ContactApp = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (savedContacts.length) setContacts(savedContacts)
    }, [])

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addHanlder = (contact) => {
        setContacts([
            ...contacts,
            contact
        ])
    }

    const deleteHanlder = (contactId) => {
        const filteredContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(filteredContacts);
    }

    return (<>
        <AddContact onAdd={addHanlder} />
        <ContactsList contacts={contacts} onDelete={deleteHanlder} />
    </>);
}

export default ContactApp;