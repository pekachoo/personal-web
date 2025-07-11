import About from './AboutComponents/About.jsx'
import Navbar from './ConstantComponents/Navbar.jsx'
import Skills from './AboutComponents/Skills.jsx'
import './AboutComponents/AboutMe.css'
import Footer from './ConstantComponents/Footer.jsx';
export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-200 via-white to-gray-400">
                <Navbar />
                <main className="flex-grow">
                    <About />
                    <Skills />
                </main>
                <Footer />
            </div>
        </>
      );
}