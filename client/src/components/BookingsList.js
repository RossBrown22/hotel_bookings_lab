const BookingsList = ({ bookings, deleteBookings }) => {

    const listItems = () => {
        return (
            bookings.map(booking => {
                return (
                    <div key={booking._id}>
                        <p>Guest: {booking.name}</p>
                        <p>Email: {booking.email}</p>
                        <button type="button" onClick={() => deleteBookings(booking._id)}>Delete</button>
                    </div>
                    
                )
            })
        )
    }

    return (
        <div>
            {listItems()}
        </div>
    )
}

export default BookingsList;