const BookingsForm = (() => {

    return (
        <form>
            <label>Name:</label>
            <input type="text" required/>
            <br/>
            <label>Email:</label>
            <input type="text" required/>
            <br/>
            <input type="submit" value="Create Booking" id="save"/>
        </form>
    )
})

export default BookingsForm;