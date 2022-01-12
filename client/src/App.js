import './App.css';
import { useState, useEffect} from 'react';
import BookingsContainer from './containers/BookingsContainer';

function App() {
  return (
    <>
    <h1>Bookings</h1>
    <BookingsContainer/>
    </>
  );
}

export default App;
