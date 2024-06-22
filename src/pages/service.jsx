import Navbar from "../../components/Navbar";
import styles from "../../assets/css/home.module.css";

export default function Servicepage() {
    return (
        <>
            <Navbar />
            <main className={`${styles.hero} w-full h-auto container mx-auto`}>
                <section className="w-full h-screen flex flex-col justify-center items-center pt-[100px] border-2">
                    <div className="flex items-center justify-between w-full h-auto">
                        <hr className="w-[35%] h-[10px] bg-secondary border" />
                        <h3 className="text-4xl font-bold text-center text-secondary">Welcome to</h3>
                        <hr className="w-[35%] h-[10px] bg-secondary" />
                    </div>
                    <h1 className="font-bold leading-snug text-center text-[200px]">Sea Salon</h1>
                    <button className="px-5 py-3 bg-secondary">
                        explore
                    </button>
                </section>
            </main>
        </>
    );
}