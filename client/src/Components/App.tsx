import { Routes, Route } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import NavBarComponent from "./NavBarComponent";

function App() {
    return (
        <div className="App">
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<CarouselComponent />} />
            </Routes>
        </div>
    );
}

export default App;
