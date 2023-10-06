export const fetchData = async (location) => {
    const superSecretApiKey = "f32159d8be474bc6bb190017232005";
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${superSecretApiKey}&q=${location}&aqi=no`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};
