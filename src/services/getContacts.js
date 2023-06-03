import http from "./http";
const getContacts = () => {
    return http.get('contacts');
}

export default getContacts;