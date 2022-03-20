import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const CityPage = ({ cityName, temp, tempMax, tempMin, desc }) => {
    const root = {
        bgcolor: "#cfe8fc",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        pt: "30px",
    };

    return (
        <Box height="100vh" width="100vw" backgroundColor="#ffffff">
            <Container maxWidth="lg">
                <Box sx={root}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <p>Город</p>
                        <p>Температура</p>
                        <p>Описание</p>
                        <p>Компоненты...</p>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CityPage;
