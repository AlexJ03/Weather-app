import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const CardComponent = ({
    cityName,
    description,
    feelLike,
    temp,
    wind,
    maxTemp,
    minTemp,
}) => {
    const options = {
        month: "long",
        day: "numeric",
        weekday: "long",
    };
    let dateNow = new Date().toLocaleString("ru", options);
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleClickCard = () => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/weather/city`);
        }, 1000);
    };

    const weatherIcon = useSelector((state) => state.city.weatherIcon);

    const largeScreen = window.matchMedia("(min-width: 768px)").matches;

    return (
        <Box display="flex" justifyContent="center">
            <Card
                sx={{
                    width: "90vw",
                    borderRadius: "20px",
                    opacity: ".7",
                    transition: ".3s",
                    "&:hover": {
                        opacity: 1,
                    },
                }}
                onClick={() => handleClickCard()}
            >
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Box width={largeScreen ? null : "225px"}>
                            <Typography
                                textTransform="capitalize"
                                fontSize={25}
                            >
                                {cityName}
                            </Typography>
                            <Typography
                                sx={{
                                    mb: "15%",
                                    textTransform: "capitalize",
                                    fontSize: 17,
                                }}
                                color="text.secondary"
                            >
                                {dateNow}
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Typography
                                    fontSize={20}
                                    textTransform="capitalize"
                                >
                                    {description}
                                </Typography>
                                <img
                                    style={{ height: "80px" }}
                                    src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                                    alt={description}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Typography fontSize={30}>{temp} ????</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            {loading ? (
                <Box
                    sx={{
                        position: "absolute",
                        top: "30%",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : null}
        </Box>
    );
};

export default CardComponent;
