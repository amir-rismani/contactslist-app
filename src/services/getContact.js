import http from "./http";

export default function getContact(contactId) {
    return http.get(`contacts/${contactId}`);
}