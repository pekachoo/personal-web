import Navbar from './ConstantComponents/Navbar.jsx'
import Hero from './HomeComponents/Hero.jsx'
import SneakPeak from './HomeComponents/SneakPeak.jsx'
import './HomeComponents/Home.css'
import Footer from './ConstantComponents/Footer.jsx';
export default function Home() {
    return (
        <>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <SneakPeak />
            </main>
            <Footer />
          </div>
        </>
      );
}