import { useState } from "react";
import { fetchData } from "./api/api";
import "./App.css";

import Weather from "./components/Weather";
import Location from "./components/Location";

function App() {
    const [location, setLocation] = useState("Cape Town");
    const [weatherData, setWeatherData] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const handleChange = (e) => (e ? setLocation(e) : setLocation("Cape Town"));

    const getWeather = () => {
        fetchData(location).then((e) => {
            try {
                setErrorMessage(e.error.message);
                console.log(e.error);
            } catch (error) {
                setWeatherData(e);
            }
        });
    };

    return (
        <div className="App">
            {weatherData ? (
                <Weather weatherData={weatherData} />
            ) : (
                <Location
                    errorMessage={errorMessage}
                    handleChange={handleChange}
                    getWeather={getWeather}
                />
            )}
        </div>
    );
}
export default App;
