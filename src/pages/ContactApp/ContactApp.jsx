import { useEffect, useState } from "react";
import ContactsList from "../../components/ContactsList/ContactsList";
import getContacts from "../../services/getContacts";
import deleteContact from "../../services/deleteContact";

const ContactApp = () => {
    const [contacts, setContacts] = useState([])

    const getAllContacts = async () => {
        try {
            const allContacts = await getContacts();
            setContacts(allContacts.data)

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

    return (<>
        <ContactsList contacts={contacts} onDelete={deleteHanlder} />
    </>);
}

export default ContactApp;