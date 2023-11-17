import { useState } from "react";
import { fetchData } from "./api/api";
import "./styles/App.css";
import "./styles/responsive.css";
import Weather from "./components/Weather";
import Location from "./components/Location";
import Loader from "./components/loader/Loader";

function App() {
    const [location, setLocation] = useState();
    const [weatherData, setWeatherData] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => (e ? setLocation(e) : setLocation("Cape Town"));
    function getLocation() {
        if (navigator.geolocation) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(success, error, {
                enableHighAccuracy: true,
            });
        } else {
            setErrorMessage("Please enable location");
        }
    }
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coords = `${latitude} ${longitude}`;
        setLocation(coords);
        getWeather(coords);
    }

    function error() {
        setLoading(false);
        setErrorMessage("Please enable location");
    }

    const getWeather = (loc) => {
        setLoading(true);
        if (loc) {
            fetchData(loc).then((e) => {
                try {
                    setLoading(false);
                    setErrorMessage(e.error.message);
                    console.log(e.error);
                } catch (error) {
                    setLoading(false);
                    setWeatherData(e);
                }
            });
        } else {
            getLocation();
        }
    };
    // add automatic location detection
    return (
        <div className="App">
            {weatherData ? (
                <Weather weatherData={weatherData} />
            ) : (
                <>
                    <Location
                        location={location}
                        errorMessage={errorMessage}
                        handleChange={handleChange}
                        getWeather={getWeather}
                    />
                    {loading ? <Loader /> : null}
                </>
            )}
        </div>
    );
}
export default App;
