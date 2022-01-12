import BookingsForm from "../components/BookingsForm";
import BookingsList from "../components/BookingsList";
import {getBookings} from "../BookingsService";
import { deleteBookings } from "../BookingsService";

import { useState, useEffect } from 'react';

const BookingsContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
        .then(data => setBookings(data))
    }, []);

    const addBooking = (booking) => {
        const temp = [...bookings, booking];
        setBookings(temp);
    }

    return (
        <>
            <BookingsForm addBooking={addBooking}/>
            <BookingsList bookings={bookings} deleteBookings={deleteBookings}/>
        </>
    )
}

export default BookingsContainer;