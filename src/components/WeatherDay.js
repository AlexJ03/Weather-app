import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useSelector } from "react-redux";

const WeatherDay = () => {
    const dataWeather = useSelector((state) => state.city.city);

    const options = {
        weekday: "long",
    };

    const largeScreen = window.matchMedia("(min-width: 768px)").matches;

    return (
        <Box marginTop={!largeScreen ? "3vh" : "1vh"}>
            <List>
                {dataWeather.daily.map((item, index) => (
                    <ListItem key={index}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box
                                marginLeft={!largeScreen ? "10px" : "50px"}
                                width={!largeScreen ? "140px" : "30vw"}
                            >
                                <ListItemText
                                    primary={new Date(
                                        dataWeather.daily[index].dt * 1000
                                    ).toLocaleDateString("ru", options)}
                                />
                            </Box>
                            <Box width={!largeScreen ? "130px" : "50vw"}>
                                <img
                                    style={{ height: "80px" }}
                                    src={`http://openweathermap.org/img/wn/${dataWeather.daily[index].weather[0].icon}@2x.png`}
                                    alt={"weatherIcon"}
                                />
                            </Box>
                        </Box>
                        <ListItemText
                            primary={
                                Math.round(dataWeather.daily[index].temp.max) +
                                "°"
                            }
                        />
                        <ListItemText
                            primary={
                                Math.round(dataWeather.daily[index].temp.min) +
                                "°"
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default WeatherDay;
