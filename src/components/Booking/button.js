// src/components/buttonBooking.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../../utils/axiosInstance';

const ButtonBooking = ({ selectedService, onClose }) => {
    const [bookingDateTime, setBookingDateTime] = useState({ date: '', time: '' });

    const handleConfirmBooking = async () => {
        if (bookingDateTime.date && bookingDateTime.time) {
            const bookingData = {
                serviceId: selectedService.id,
                date: bookingDateTime.date,
                time: bookingDateTime.time,
            };

            try {
                const response = await axiosInstance.post('/bookings', bookingData);
                console.log('Booking created:', response.data);
                alert('Booking created successfully!');
                onClose();
            } catch (error) {
                console.error('Error creating booking:', error);
                alert('Failed to create booking. Please try again.');
            }
        } else {
            alert('Please select date and time for booking');
        }
    };

    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50">
            <div className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-bold">Book {selectedService.name}</h2>
                <div className="flex flex-col gap-4">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" onChange={(e) => setBookingDateTime({ ...bookingDateTime, date: e.target.value })} />
                    <label htmlFor="time">Time:</label>
                    <select id="time" onChange={(e) => setBookingDateTime({ ...bookingDateTime, time: e.target.value })}>
                        <option value="">Select Time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                        <option value="19:00">07:00 PM</option>
                        <option value="20:00">08:00 PM</option>
                    </select>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 mr-4 text-white rounded-md bg-primary" onClick={handleConfirmBooking}>Book Now</button>
                    <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

ButtonBooking.propTypes = {
    selectedService: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ButtonBooking;