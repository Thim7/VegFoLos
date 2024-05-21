// import * as request from '~/utils/httpRequest';

import axios from 'axios';

const GEO_CODING_BASE_URL = 'https://api.opencagedata.com/geocode/v1/json';
const OPEN_CAGE_GEOCODING_API_KEY = 'ff59516106b44bac818d3b37d7e85492';

export const search = async (q) => {
    try {
        const res = await axios.get(GEO_CODING_BASE_URL, {
            params: {
                q: `${q}, Vietnam`,
                key: OPEN_CAGE_GEOCODING_API_KEY,
                language: 'en',
                limit: 10,
            },
        });
        return res.data.results;
    } catch (err) {
        console.log(err);
    }
};
search();
