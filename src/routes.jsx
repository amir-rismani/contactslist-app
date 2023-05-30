import { Route, Routes } from "react-router-dom";
import AddContact from "./pages/AddContact/AddContact";
import ContactApp from "./pages/ContactApp/ContactApp";
const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ContactApp />} />
            <Route path="/add-contact" element={<AddContact />} />
        </Routes>
    );
}

export default WebRoutes;