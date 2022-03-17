import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Paper from "@mui/material/Paper";
import CardComponent from "./CardComponent";
import Tooltip from "@mui/material/Tooltip";

const Input = () => {
    const [city, setCity] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [data, setData] = useState();

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
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data, "data");
                setData(data);
            });
        setCity("");
    };

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="center">
                <Paper
                    component="form"
                    sx={{
                        p: "2px 4px",
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "90vw",
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
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Поиск погоды по городу"
                    />
                    <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                        onClick={(e) => handleClick(e)}
                    >
                        <Tooltip title="Искать">
                            <SearchIcon />
                        </Tooltip>
                    </IconButton>
                </Paper>
            </Box>
            {data ? (
                <CardComponent
                    cityName={data.name}
                    description={data.weather[0].description}
                    feelLike={Math.round(data.main.feels_like)}
                    temp={Math.round(data.main.temp)}
                />
            ) : null}
        </Box>
    );
};

export default Input;
