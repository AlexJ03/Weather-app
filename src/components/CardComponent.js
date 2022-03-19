import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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

    return (
        <Box display="flex" justifyContent="center">
            <Card sx={{ width: "90vw" }}>
                <CardContent>
                    <Typography fontSize={25}>Погода в {cityName}</Typography>
                    <Typography
                        sx={{
                            mb: 1.5,
                            textTransform: "capitalize",
                            fontSize: 20,
                        }}
                        color="text.secondary"
                    >
                        {dateNow}
                    </Typography>
                    <Typography fontSize={30}>
                        {" "}
                        <strong> Сегодня {description} </strong>
                    </Typography>
                    <Typography fontSize={30}>Температура: {temp} °С</Typography>
                    <Typography fontSize={30}>
                        Ощущается как {feelLike} °С
                    </Typography>
                    <Typography fontSize={30}>Скорость ветра {wind} м/с</Typography>
                    <Typography fontSize={30}>
                        Максимальная температура: {maxTemp} °С
                    </Typography>
                    <Typography fontSize={30}>
                        Минимальная температура: {minTemp} °С
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardComponent;
