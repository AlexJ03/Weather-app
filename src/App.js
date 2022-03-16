import Input from "./components/Input";
import { Routes, Route, Link } from "react-router-dom";
import Preview from "./pages/Preview";
import Weather from "./pages/Weather";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Preview />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </>
    );
};

export default App;
