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
        }, 1000);
    };

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
                        <Box>
                            <Typography fontSize={25}>{cityName}</Typography>
                            <Typography
                                sx={{
                                    mb: "20%",
                                    textTransform: "capitalize",
                                    fontSize: 20,
                                }}
                                color="text.secondary"
                            >
                                {dateNow}
                            </Typography>
                            <Typography
                                fontSize={27}
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
