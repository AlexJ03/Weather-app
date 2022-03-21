import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import WeatherTime from "../components/WeatherTime";

const CityPage = () => {
    const root = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        pt: "30px",
    };

    const citySlice = useSelector((state) => state.city.city);
    const citySliceName = useSelector((state) => state.city.cityName);

    return (
        <Box height="100vh" width="100vw" backgroundColor="#ffffff">
            <Container maxWidth="lg">
                <Box sx={root}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                        }}
                    >
                        <Typography textTransform="capitalize" fontSize={40}>
                            {citySliceName}
                        </Typography>
                        <Typography textTransform="capitalize" fontSize={20}>
                            {citySlice.current.weather[0].description}
                        </Typography>
                        <Typography fontSize={60}>
                            {"\u00A0"} {Math.round(citySlice.current.temp)}°
                        </Typography>
                        <Box
                            sx={{
                                width: "100vw",
                                display: "flex",
                                justifyContent: "center",
                                borderTop: "1px solid #e4e4e4",
                                borderBottom: "1px solid #e4e4e4",
                                mt: "10vh",
                            }}
                        >
                            <WeatherTime />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

{
    /* <Box display="flex">
                            <Stack direction="row" spacing={5}>
                            <Typography fontSize={19}>
                            максимальная{" "}
                            {Math.round(citySlice.main.temp_max)}
                            </Typography>
                            <Typography fontSize={19}>
                            минимальная{" "}
                            {Math.round(citySlice.main.temp_min)}
                            </Typography>
                            </Stack>
                        </Box> */
}

export default CityPage;
