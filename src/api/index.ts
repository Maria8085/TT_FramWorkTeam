import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://test-front.framework.team',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiInstance