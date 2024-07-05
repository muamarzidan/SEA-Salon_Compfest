import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ButtonBooking from "../../components/Booking/button";

export default function Servicepage() {
    const [services, setServices] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

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
        setSelectedService(null);
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

            {showModal && (
                <ButtonBooking selectedService={selectedService} onClose={handleCloseModal} />
            )}

            <Footer />
        </>
    );
}