import { ReactComponent as LocationPin } from "./icons/location-dot-solid.svg";
export default function Location({
    location,
    getWeather,
    handleChange,
    errorMessage,
}) {
    return (
        <div className="location_form">
            <h1>Please enter your location</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    getWeather(location);
                }}
            >
                <input
                    className="location_input rBorder_left blur"
                    type="text"
                    name="location_input"
                    id="location_input"
                    // onBlur={(e) => {
                    //     handleChange(e.target.value);
                    // }}
                    placeholder="Cape Town"
                    onKeyDown={(e) => {
                        handleChange(e.target.value);
                    }}
                />
                <button className="location_button rBorder_right blur">
                    <LocationPin />
                </button>
            </form>
            {errorMessage ? (
                <h1 className="block blur">{errorMessage}</h1>
            ) : null}
        </div>
    );
}
