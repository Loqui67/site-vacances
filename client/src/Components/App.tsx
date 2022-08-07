import { Routes, Route } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import NavBarComponent from "./NavBarComponent";
import ProfilPage from "./Profil/ProfilPage";
import Page404 from "./Page404";
import LoginComponent from "./LoginComponent";

function App() {
    return (
        <div className="App">
            <NavBarComponent />
            <Routes>
                <Route path="*" element={<Page404 />} />
                <Route path="/" element={<CarouselComponent />} />
                <Route path="/profil" element={<ProfilPage />} />
                <Route path="/login" element={<LoginComponent />} />
            </Routes>
        </div>
    );
}

export default App;
