export const fetchData = async (location) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};
