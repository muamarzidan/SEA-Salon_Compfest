import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Servicepage() {
    const [services, setServices] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [bookingDateTime, setBookingDateTime] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/services')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);

    const handleBooking = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmBooking = () => {
        if (bookingDateTime) {
            const bookingData = {
                serviceId: selectedService.id,
                date: bookingDateTime.date,
                time: bookingDateTime.time
            };
    
            const token = localStorage.getItem('token');
    
            axios.post('http://localhost:5000/api/bookings', bookingData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('Booking created:', response.data);
                setShowModal(false);
                setBookingDateTime(null);
                // Show success message
                alert('Booking created successfully!');
            })
            .catch(error => {
                console.error('Error creating booking:', error);
                alert('Failed to create booking. Please try again.');
            });
        } else {
            alert('Please select date and time for booking');
        }
    }; 

    return (
        <>
            <Navbar />
            <main className="w-full h-auto">
                <section id="service" className="container mx-auto">
                    <div className="w-full h-auto flex flex-col justify-center items-center gap-[30px] pt-[190px] mb-[100px]">
                        {
                            services.map((service) => (
                                <div key={service.id} id={`card-${service.type}`} className="flex items-center justify-between w-full h-[300px] p-5 rounded-md border-2">
                                    <div className="flex items-center justify-center w-2/5 h-full">
                                        <img src={service.thumbnail} alt={`${service.name} Thumbnails`} id={service.type} className="object-cover w-full h-full rounded-md" />
                                    </div>
                                    <div className="flex flex-col items-start justify-between w-3/5 h-full px-5 py-2">
                                        <div className="w-full h-auto">
                                            <h1 id="name" className="text-2xl font-bold">{service.name}</h1>
                                            <p id="description" className="mt-1 text-sm text-gray-700">{service.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full h-auto">
                                            <div className="flex flex-col justify-end w-full h-full gap-1">
                                                <p id="price" className="text-lg font-semibold text-primary">Rp. {service.price}</p>
                                                <p id="rating" className="text-lg font-semibold text-primary">{service.rating} +</p>
                                            </div>
                                            <div className="flex justify-end w-full h-full gap-5">
                                                <Link to={`/service/${service.id}`} className='px-[50px] py-3 font-bold text-lg flex justify-center items-center text-white rounded-lg bg-primary'>
                                                    Detail
                                                </Link>
                                                <button id="booking" className="px-[40px] py-3 font-bold text-lg rounded-lg bg-secondary" onClick={() => handleBooking(service)}>
                                                    Booking
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </main>

            {/* Modal for Booking */}
            {showModal && (
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
                                <option value="13.00">13.00 PM</option>
                                <option value="14.00">14.00 PM</option>
                                <option value="15.00">15.00 PM</option>
                                <option value="16.00">16.00 PM</option>
                                <option value="17.00">17.00 PM</option>
                                <option value="18.00">18.00 PM</option>
                                <option value="19.00">19.00 PM</option>
                                <option value="20.00">20.00 PM</option>
                            </select>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="px-4 py-2 mr-4 text-white rounded-md bg-primary" onClick={handleConfirmBooking}>Book Now</button>
                            <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}