import http from "./http";

export default function editContact(contactId, data) {
    return http.put(`/contacts/${contactId}`, data)
}