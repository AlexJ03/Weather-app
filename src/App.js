import { Routes, Route } from "react-router-dom";
import CityPage from "./pages/CityPage";
import Preview from "./pages/Preview";
import Weather from "./pages/Weather";
import { useSelector } from "react-redux";

const App = () => {
    const citySlice = useSelector((state) => state.city.city);

    return (
        <Routes>
            <Route path="/" element={<Preview />} />
            <Route path="/weather" element={<Weather />} />
            <Route path={`/weather/city`} element={<CityPage />} />
        </Routes>
    );
};

export default App;
