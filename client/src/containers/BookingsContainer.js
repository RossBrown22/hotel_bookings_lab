import BookingsForm from "../components/BookingsForm";
import BookingsList from "../components/BookingsList";
import getBookings from "../BookingsService";

import { useState, useEffect } from 'react';

const BookingsContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
        .then(data => setBookings(data))
    }, []);

    return (
        <>
            <BookingsForm/>
            <BookingsList bookings={bookings}/>
        </>
    )
}

export default BookingsContainer;