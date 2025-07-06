import Navbar from './ConstantComponents/Navbar.jsx'
import Hero from './HomeComponents/Hero.jsx'
import SneakPeak from './HomeComponents/SneakPeak.jsx'
import './HomeComponents/Home.css'
export default function Home() {
    return (
        <>
          <Navbar />
          <Hero />
          <SneakPeak />
        </>
      );
}