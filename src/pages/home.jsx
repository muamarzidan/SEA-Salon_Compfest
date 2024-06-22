import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../assets/css/home.module.css";

export default function Homepage() {
    return (
        <>
            <Navbar />
            <main className="w-full h-auto">
                <section id="hero" className={`${styles.hero} container mx-auto`}>
                    <div className="w-full h-screen flex flex-col justify-center items-center pt-[100px]">
                        <div className="flex items-center justify-between w-full h-auto">
                            <hr className="w-[35%] h-[10px] bg-secondary border" />
                            <h3 className="text-4xl font-bold text-center text-secondary">Welcome To</h3>
                            <hr className="w-[35%] h-[10px] bg-secondary" />
                        </div>
                        <h1 className="!font-black leading-snug text-center text-[200px]">Sea Salon</h1>
                        <button className="px-[40px] py-3 font-bold text-lg rounded-lg bg-secondary">
                            Explore
                        </button>
                    </div>
                </section>
                <section id="tagline" className={`${styles.tagline} tagline w-full h-[200px] bg-primary`}>
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <p className="p-3 italic font-black text-center text-gray-500 text-7xl">Beauty and Elegance Redefined</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}