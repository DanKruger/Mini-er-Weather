import { ReactComponent as DropIcon } from "./icons/droplet-solid.svg";
import { ReactComponent as SunIcon } from "./icons/sun-solid.svg";
import { ReactComponent as WindIcon } from "./icons/wind-solid.svg";

function Weather({ weatherData }) {
    return (
        <>
            <div id="location">
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
            <div id="stats">
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
                    <p>{weatherData?.current.uv < 6 ? "normal" : "high"}</p>
                </span>
            </div>
        </>
    );
}

export default Weather;
