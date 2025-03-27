import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Practices from "./pages/Practices";
import Blog from "./pages/Blog";
import Book from "./pages/Book";

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/doctors" element={<Doctors />} />
                        <Route path="/practices" element={<Practices />} />
                        <Route path="/Blog" element={<Blog />} />
                        <Route path="/Book" element={<Book />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}
