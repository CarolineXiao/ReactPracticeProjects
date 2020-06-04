import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0BW7YhNigDJgnk5JnywhUgfpMtxirE2A_Ch7H7D-_vs'
    }
});
