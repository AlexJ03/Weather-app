import background from "../assets/preview-blue.jpg";
import { Link } from "react-router-dom";

const Preview = () => {
    const root = {
        height: "100vh",
        backgroundImage: `url(${background})`,
        color: "#fff",
    };

    return (
        <div style={root}>
            <div>
                <Link to="/weather">
                    <button>Узнайте погоду в ващем городе!</button>
                </Link>
            </div>
        </div>
    );
};

export default Preview;
