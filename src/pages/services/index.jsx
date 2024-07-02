import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import serviceDatas from "../../api/services/data";


export default function Servicepage() {
    return (
        <>
            <Navbar />
            <main className="w-full h-auto">
                <section id="service" className="container mx-auto">
                    <div className="w-full h-auto flex flex-col justify-center items-center gap-[30px] pt-[190px] mb-[100px]">
                        {
                            serviceDatas.map((service) => (
                                <div key={service.id} id={`card-${service.typeService}`} className="flex items-center justify-between w-full h-[300px] p-5 rounded-md border-2">
                                    <div className="flex items-center justify-center w-2/5 h-full">
                                        <img src={service.thumbnail} alt={`${service.nameService} Thumbnails`} id={service.typeService} className="object-cover w-full h-full rounded-md" />
                                    </div>
                                    <div className="flex flex-col items-start justify-between w-3/5 h-full px-5 py-2">
                                        <div className="w-full h-auto">
                                            <h1 id="name" className="text-2xl font-bold">{service.nameService}</h1>
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
                                                <button id="booking" className="px-[40px] py-3 font-bold text-lg rounded-lg bg-secondary">
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
            </main >
            <Footer />
        </>
    );
}