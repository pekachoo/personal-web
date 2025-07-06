import About from './AboutComponents/About.jsx'
import Navbar from './ConstantComponents/Navbar.jsx'
import Skills from './AboutComponents/Skills.jsx'
import './AboutComponents/AboutMe.css'
export default function Home() {
    return (
        <>
            <Navbar />
            <About />
            <Skills />
        </>
      );
}