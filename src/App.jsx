import { useState } from "react";
import { fetchData } from "./api/api";
import "./App.css";
import { ReactComponent as DropIcon } from "./components/icons/droplet-solid.svg";
import { ReactComponent as SunIcon } from "./components/icons/sun-solid.svg";
import { ReactComponent as WindIcon } from "./components/icons/wind-solid.svg";

function App() {
    const [location, setLocation] = useState("Cape Town");
    const [weatherData, setWeatherData] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const handleChange = (e) => {
        e ? setLocation(e) : setLocation("Cape Town");
    };
    const getWeather = () => {
        fetchData(location).then((e) => {
            try {
                setErrorMessage(e.error.message);
                console.log(e.error.message);
            } catch (error) {
                setWeatherData(e);
            }
        });
    };

    return (
        <div className="App">
            {weatherData ? (
                <>
                    <div className="location">
                        <div className="area">
                            <h1>{weatherData?.location?.name}</h1>
                            <h2>
                                {weatherData?.location?.region}{" "}
                                {weatherData?.location?.country}
                            </h2>
                        </div>
                        <div className="weather_condition">
                            <img
                                id="condition_icon"
                                src={`https:${weatherData?.current.condition.icon}`}
                                alt={weatherData?.current.condition.text}
                            />
                        </div>
                    </div>
                    <h1 id="temperature">
                        {weatherData?.current.temp_c}
                        <span id="temp-unit">°C</span>
                    </h1>
                    <span id="feels_like">
                        <h2>Feels like {weatherData?.current.feelslike_c}°C</h2>
                        <h2>it's {weatherData.current.condition.text} today</h2>
                    </span>
                    <div className="stats">
                        <span className="stat blur" id="wind">
                            <WindIcon />
                            <h4 className="stat_title">Wind</h4>
                            <h1>{weatherData?.current.wind_kph} kph</h1>
                            <p>
                                {weatherData?.current.wind_dir}{" "}
                                {weatherData?.current.wind_degree}°
                            </p>
                        </span>
                        <span className="stat blur" id="humid">
                            <DropIcon />
                            <h4 className="stat_title">Humidity</h4>
                            <h1>{weatherData?.current.humidity}%</h1>
                            <p>{weatherData?.current.cloud}% cloudy</p>
                        </span>
                        <span className="stat blur" id="uv_index">
                            <SunIcon />
                            <h4 className="stat_title">UV index</h4>
                            <h1>{weatherData?.current.uv} UVI</h1>
                            <p>
                                {weatherData?.current.uv < 6
                                    ? "normal"
                                    : "high"}
                            </p>
                        </span>
                    </div>
                </>
            ) : (
                <div className="location_form">
                    <h1>Please enter your location</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            getWeather();
                        }}
                    >
                        <input
                            className="location_input rBorder_left blur"
                            type="text"
                            name="location"
                            id="location"
                            // onBlur={(e) => {
                            //     handleChange(e.target.value);
                            // }}
                            placeholder="Cape Town"
                            onKeyDown={(e) => {
                                handleChange(e.target.value);
                            }}
                        />
                        <button className="location_button rBorder_right blur">
                            search
                        </button>
                    </form>
                    {errorMessage ? (
                        <h1 className="block blur">{errorMessage}</h1>
                    ) : (
                        <p></p>
                    )}
                </div>
            )}
        </div>
    );
}
export default App;
