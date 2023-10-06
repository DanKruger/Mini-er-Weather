export default function Location({ getWeather, handleChange, errorMessage }) {
    return (
        <>
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
        </>
    );
}
