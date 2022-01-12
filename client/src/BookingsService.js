const baseURL = 'http://localhost:5000/api/bookings/';

const getBookings = () => {
    return fetch(baseURL).then(res => res.json());
};

export default getBookings;