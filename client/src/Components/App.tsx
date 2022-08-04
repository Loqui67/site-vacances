import { Routes, Route } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import NavBarComponent from "./NavBarComponent";
import ProfilPage from "./ProfilPage";

function App() {
    return (
        <div className="App">
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<CarouselComponent />} />
                <Route path="/profil" element={<ProfilPage />} />
            </Routes>
        </div>
    );
}

export default App;
