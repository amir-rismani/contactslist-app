import http from "./http";

export default function getContacts (){
    return http.get('contacts');
}