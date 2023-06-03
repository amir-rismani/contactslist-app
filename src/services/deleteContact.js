import http from "./http";

const deleteContact = (contactId) => {
    return http.delete(`/contacts/${contactId}`);
}

export default deleteContact;