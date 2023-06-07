import Contact from "../../components/Contact/Contact";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import getContacts from "../../services/getContacts";
import deleteContact from "../../services/deleteContact";

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(() => {
        getAllContacts();
    }, [])

    const getAllContacts = async () => {
        try {
            const { data } = await getContacts();
            setContacts(data);
            setFilteredContacts(data);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteHanlder = async (contactId) => {
        await deleteContact(contactId);
        getAllContacts();
    }

    const onSearch = (searchExpr) => {
        const filteredContacts = contacts.filter((contact) => Object.values(contact).join(" ").toLowerCase().includes(searchExpr.toLowerCase()));
        setFilteredContacts(filteredContacts);
    }

    let renderList = <p>Contacts are loading...</p>
    if (!filteredContacts.length)
        renderList = <p>Contact not exist...</p>
    else
        renderList = <div>{filteredContacts.map(contact => <Contact key={contact.id} contact={contact} onDelete={deleteHanlder} />)}</div>

    return (
        <>
            <h2>Contacts List</h2>
            <SearchBar onSearch={onSearch} />
            {renderList}
        </>
    );
}

export default ContactsList;