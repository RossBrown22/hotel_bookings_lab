import { useState } from 'react';
import { postBookings } from '../BookingsService';

const BookingsForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({})

    const onChange = (evt) => {
        formData[evt.target.id] = evt.target.value;
        setFormData(formData);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log("form data:", formData)
        postBookings(formData).then((data) => {
            addBooking(data);
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name:</label>
            <input onChange={onChange} id="name" type="text" required />
            <br />
            <label>Email:</label>
            <input onChange={onChange} id="email" type="text" required />
            <br />
            <input type="submit" value="Create Booking" id="save" />
        </form>
    )
}

export default BookingsForm;