import Footer from "./ConstantComponents/Footer";
import Navbar from "./ConstantComponents/Navbar";
import ContactComponent from "./ContactComponent";

export default function ContactPage() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-200 via-white to-gray-400">
                <Navbar />
                <main className="flex-grow">
                    <ContactComponent />
                </main>
                <Footer />
            </div>
        </>
    );
}