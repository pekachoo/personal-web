import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import ProjectPage from './ProjectPage.jsx';
import ContactPage from './ContactPage.jsx';
import OpeningTransition from './OpeningTransition.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningTransition />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </StrictMode>,
)
