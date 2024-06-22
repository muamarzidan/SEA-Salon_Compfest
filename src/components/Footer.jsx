const Footer = () => {
    return (
        <footer id="contact" className="container mx-auto bg-white h-[500px]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-5">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-5xl">
                    Contact Us
                </h2>
                <p className="max-w-md mx-auto mt-4 text-lg text-center text-gray-700">
                    Contact our support Sea Salon to get more knowledge base or related to our services
                </p>
                <div className="flex items-center justify-between w-full h-auto">
                    <div className="flex flex-col items-center justify-center w-full h-auto">
                        <p className="font-black text-center text-primary">Thomas</p>
                        <p className="text-center text-gray-500">08123456789</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-auto">
                        <p className="font-black text-center text-primary">Sekar</p>
                        <p className="text-center text-gray-500">08164829372</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
