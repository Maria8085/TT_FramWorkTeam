import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://test-front.framework.team',
    headers: {
        'Content-Type': 'application/json',
    }
});

// class paintingsAPI { 
//     getPaintings () {
      
//     }
// }

// class authorsAPI { 
//     getAuthors (ds) {
//       dsdsdsdsd
//     }
// }

export default apiInstance