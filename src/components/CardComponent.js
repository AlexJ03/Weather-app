import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

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

    const handleClickCard = () => {
        setTimeout(() => {
            navigate(`/weather/city`);
        }, 300);
    };

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
                            <Typography textTransform="capitalize" fontSize={25}>{cityName}</Typography>
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
                            <Typography
                                fontSize={20}
                                textTransform="capitalize"
                            >
                                {description}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography fontSize={30}>{temp} °С</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardComponent;
