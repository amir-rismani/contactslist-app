import { Route, Routes } from "react-router-dom";
import AddContact from "./pages/AddContact/AddContact";
import EditContact from "./pages/EditContact/EditContact";
import NotFound from "./pages/NotFound/NotFound";
import ContactsList from "./pages/ContactList/ContactsList";
import ContactDetails from "./pages/ContactDetails/ContactDetails";
const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ContactsList />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default WebRoutes;