import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const CityPage = ({ cityName, temp, tempMax, tempMin, desc }) => {
    const root = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        pt: "30px",
    };

    const citySlice = useSelector((state) => state.city.city);

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
                        <Typography fontSize={30}>{citySlice.name}</Typography>
                        <Typography fontSize={50}>
                            {Math.round(citySlice.main.temp)}°
                        </Typography>
                        <Typography fontSize={19}>
                            {citySlice.weather[0].description}
                        </Typography>
                        <Box display="flex">
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
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CityPage;
