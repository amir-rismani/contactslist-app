import { Route, Routes } from "react-router-dom";
import AddContact from "./pages/AddContact/AddContact";
import EditContact from "./pages/EditContact/EditContact";
import ContactApp from "./pages/ContactApp/ContactApp";
import Details from "./components/ContactsList/Details/Details";
import NotFound from "./pages/NotFound/NotFound";
const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ContactApp />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/contact/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default WebRoutes;