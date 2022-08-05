import { Routes, Route } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import NavBarComponent from "./NavBarComponent";
import Page404 from "./Page404";
import ProfilPage from "./Profil/ProfilPage";

function App() {
    return (
        <div className="App">
            <NavBarComponent />
            <Routes>
                <Route path="*" element={<Page404 />} />
                <Route path="/" element={<CarouselComponent />} />
                <Route path="/profil" element={<ProfilPage />} />
            </Routes>
        </div>
    );
}

export default App;
