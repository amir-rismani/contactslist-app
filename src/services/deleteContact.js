import http from "./http";

export default function deleteContact(contactId) {
    return http.delete(`/contacts/${contactId}`);
}