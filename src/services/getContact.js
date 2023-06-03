import http from "./http";

const getContact = (contactId) => {
    return http.get(`contacts/${contactId}`);
}

export default getContact;