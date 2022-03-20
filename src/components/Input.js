import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Paper from "@mui/material/Paper";
import CardComponent from "./CardComponent";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";

const Input = () => {
    const [city, setCity] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [data, setData] = useState();
    const [loader, setLoader] = useState(false);
    const [inputErr, setInputErr] = useState(false);

    const geocode = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=20df0933396dc030245a38f6730e7ae8`;

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=20df0933396dc030245a38f6730e7ae8`;

    useEffect(() => {
        if (city) {
            fetch(geocode)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setLat(data[0].lat);
                    setLon(data[0].lon);
                });
        }
    }, [city]);

    const handleClick = (e) => {
        e.preventDefault();
        if (city) {
            setInputErr(false);
            setLoader(true);
            fetch(URL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data, "data");
                    setData(data);
                });
            setCity("");
            setTimeout(() => {
                setLoader(false);
            }, 1000);
        } else {
            setInputErr(true);
        }
    };

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="center">
                <Paper
                    component="form"
                    sx={{
                        p: "2px 4px",
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "90vw",
                        maxHeight: "48px",
                        borderRadius: "15px",
                        "&:hover": {
                            boxShadow: "1px 3px 7px 1px #ccc",
                        },
                    }}
                >
                    <IconButton sx={{ p: "10px" }} aria-label="menu">
                        <WbSunnyIcon />
                    </IconButton>
                    <InputBase
                        sx={{
                            ml: 1,
                            flex: 1,
                        }}
                        autoFocus
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder={
                            inputErr
                                ? "Вы не указали город!"
                                : "Узнать погоду"
                        }
                    />
                    <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                        onClick={(e) => handleClick(e)}
                    >
                        <Tooltip title="Искать">
                            {loader ? (
                                <CircularProgress
                                    sx={{ maxHeight: 24, maxWidth: 24 }}
                                />
                            ) : (
                                <SearchIcon />
                            )}
                        </Tooltip>
                    </IconButton>
                </Paper>
            </Box>
            {data && !loader && !inputErr ? (
                <CardComponent
                    cityName={data.name}
                    description={data.weather[0].description}
                    feelLike={Math.round(data.main.feels_like)}
                    temp={Math.round(data.main.temp)}
                    wind={Math.round(data.wind.speed)}
                    maxTemp={Math.round(data.main.temp_max)}
                    minTemp={Math.round(data.main.temp_min)}
                />
            ) : null}
        </Box>
    );
};

export default Input;
