use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Adam Kidd",
        email: "random@email.com",
        checkedIn: true 
    },
    {
        name: "Ross Brown",
        email: "random2@email.com",
        checkedIn: true 
    }
])