import { useState, useEffect } from "react";

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

    const handleClick = () => {
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            });
        setCity("");
    };

    return (
        <>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Поиск по городу"
            />
            <p>Погода: {data ? data.weather[0].description : null}</p>
            <p>Температура: {data ? Math.round(data.main.temp) : null}</p>
            <p>
                Ощущается как: {data ? Math.round(data.main.feels_like) : null}
            </p>
            <p>Ветер: {data ? Math.round(data.wind.speed) : null} м/с</p>
            <button onClick={() => handleClick()}>Узнать погоду</button>
        </>
    );
};

export default Input;
