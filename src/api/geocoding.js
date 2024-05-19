import axios from 'axios';
const OPEN_CAGE_GEOCODING_URL = 'https://api.opencagedata.com/geocode/v1';
const OPEN_CAGE_GEOCODING_API_KEY = 'ff59516106b44bac818d3b37d7e85492';

export const getAddressFromCoordinates = async (lat, lng) => {
    const response = await axios.get(
        `${OPEN_CAGE_GEOCODING_URL}/json?q=${lat}+${lng}&key=${OPEN_CAGE_GEOCODING_API_KEY}`,
    );
    return response.data;
};
