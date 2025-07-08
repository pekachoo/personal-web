import Footer from "./ConstantComponents/Footer";
import Navbar from "./ConstantComponents/Navbar";
import ContactComponent from "./ContactComponent";

export default function ContactPage() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <ContactComponent />
                </main>
                <Footer />
            </div>
        </>
    );
}