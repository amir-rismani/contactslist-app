import http from "./http";

export default function editContact(contactId, data) {
    console.log(contactId, data);
    http.put(`/contacts/${contactId}`, data)
}