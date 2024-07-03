    import { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';

    import Navbar from "../../components/Navbar";
    import Footer from "../../components/Footer";
    import serviceDatas from "../../api/services/data";

    const Detailpage = () => {
        const { serviceId } = useParams();
        const [selectedService, setSelectedService] = useState(null);
        const [showForm, setShowForm] = useState(false);
        const [rating, setRating] = useState(0);
        const [comment, setComment] = useState('');

        useEffect(() => {
            const foundService = serviceDatas.find((service) => service.id === parseInt(serviceId));
            setSelectedService(foundService);
        }, [serviceId]);

        const handleOpenReviewForm = () => setShowForm(true);
        const handleCloseReviewForm = () => setShowForm(false);

        const handleSubmitReview = (event) => {
            event.preventDefault();
            const review = { rating, comment };
            const updatedReview = [...selectedService.riview, { id: selectedService.riview.length + 1, ...review }];
            setSelectedService({ ...selectedService, riview: updatedReview });
            setRating(0);
            setComment('');
            handleCloseReviewForm();
        }

        return (
            <>
                <Navbar />
                <main className="w-full h-auto">
                    <section id="detail_service" className="container mx-auto">
                        <div className="w-full h-auto flex flex-col justify-center items-center gap-[30px] pt-[190px] mb-[100px]">
                            {
                                selectedService && (
                                    <>
                                        <div className="flex flex-col w-full h-auto gap-5 ">
                                            <h1 id={selectedService.nameService} className="text-4xl font-bold text-center">{selectedService.nameService}</h1>
                                            <img id={selectedService.thumbnail} src={selectedService.thumbnail} alt={`Thumbnail ${selectedService.nameService}`} className="object-cover rounded-lg" />
                                            <p id="description" className="text-gray-700 text-pretty">{selectedService.description}</p>
                                        </div>

                                        <button className="px-[40px] py-3 text-lg font-bold rounded-lg bg-secondary" onClick={handleOpenReviewForm}>
                                            Create Review
                                        </button>

                                        {showForm && (
                                            <form className="w-full p-5 mt-5 border rounded-lg" onSubmit={handleSubmitReview}>
                                                <div className="mb-4 rating-input">
                                                    <label htmlFor="rating" className="block text-lg font-medium text-gray-700">Rating:</label>
                                                    <div className="flex mt-2 space-x-4 rating-options">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <div key={i} className="flex items-center">
                                                                <input
                                                                    type="radio"
                                                                    id={`rating-${i + 1}`}
                                                                    name="rating"
                                                                    value={i + 1}
                                                                    checked={rating === i + 1}
                                                                    onChange={(event) => setRating(parseInt(event.target.value))}
                                                                    className="mr-2"
                                                                />
                                                                <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="mb-4 comment-input">
                                                    <label htmlFor="comment" className="block text-lg font-medium text-gray-700">Comment:</label>
                                                    <textarea
                                                        id="comment"
                                                        value={comment}
                                                        onChange={(event) => setComment(event.target.value)}
                                                        className="w-full p-2 mt-2 border rounded-lg"
                                                        rows="4"
                                                    />
                                                </div>
                                                <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg">Submit Review</button>
                                            </form>
                                        )}

                                        {selectedService.riview.length > 0 ? (
                                            <div className="flex flex-col w-full h-auto gap-5 mt-5">
                                                <h4 className="text-2xl font-bold">Reviews</h4>
                                                {selectedService.riview.map((review) => (
                                                    <div key={review.id} className="w-full h-auto p-5 border-2">
                                                        <p id="customer__name" className="text-lg text-primary">{review.username}</p>
                                                        <p id="rating" className="text-lg text-primary">{review.rating}</p>
                                                        <p id="comment_customer" className="text-lg text-primary">{review.comment}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <h1 className="mt-5 text-xl font-bold text-center">No Reviews Yet</h1>
                                        )}
                                    </>
                                )
                            }
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    };

    export default Detailpage;