const BookingsList = ({ bookings }) => {

    const listItems = () => {
        return (
            bookings.map(booking => {
                return (
                    <div key={booking.id}>
                        <p>Guest: {booking.name}</p>
                        <p>Email: {booking.email}</p>
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