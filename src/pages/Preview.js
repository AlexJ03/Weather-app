import background from "../assets/preview-img.jpg";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Brightness7SharpIcon from "@mui/icons-material/Brightness7Sharp";

const Preview = () => {
    const root = {
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundColor: "#e2f4ff",
        color: "#fff",
    };

    const styleBox = {
        display: "flex",
        justifyContent: "center",
        height: "60vh",
        alignItems: "center",
    };

    const styleLink = {
        textAlign: "center",
        textDecoration: "none",
    };

    return (
        <div style={root}>
            <Container maxWidth="md">
                <Box sx={styleBox}>
                    <Stack spacing={1}>
                        <Typography variant="h4" textAlign="center">
                            Узнайте погоду в вашем городе!
                        </Typography>
                        <Link to="/weather" style={styleLink}>
                            <Button
                                variant="contained"
                                sx={{ width: "100%" }}
                                color="info"
                                startIcon={<Brightness7SharpIcon />}
                            >
                                <Typography
                                    variant="h6"
                                    textAlign="center"
                                    color="#fff"
                                >
                                    Начать
                                </Typography>
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </div>
    );
};

export default Preview;
