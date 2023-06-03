import http from "./http";

export default function addContact(contact) {
    return http.post('/contacts', contact);
}