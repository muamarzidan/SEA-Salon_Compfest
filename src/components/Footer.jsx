const Footer = () => {
    return (
        <footer id="contact" className="w-full flex justify-center items-center bg-primary h-[500px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center w-full h-full gap-5">
                    <div className="flex flex-col items-center justify-start w-full h-auto gap-1">
                        <h2 className="text-3xl font-extrabold text-center text-secondary sm:text-5xl">
                            Contact Us
                        </h2>
                        <p className="max-w-lg mx-auto mt-4 text-lg text-center text-white">
                            Contact our support Sea Salon to get more knowledge base or related to our services
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-full h-auto">
                        <div className="flex flex-col items-center justify-center w-full h-auto">
                            <p className="font-black text-center text-secondary">Thomas</p>
                            <p className="text-center text-white">08123456789</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-auto">
                            <p className="font-black text-center text-secondary">Sekar</p>
                            <p className="text-center text-white">08164829372</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
