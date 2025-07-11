import Projects from './ProjectsComponents/Projects.jsx';
import Navbar from './ConstantComponents/Navbar.jsx';
import Footer from './ConstantComponents/Footer.jsx';
export default function ProjectPage() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-200 via-white to-gray-400">
                <Navbar />
                <main className="flex-grow">
                    <Projects />
                </main>
                <Footer />
            </div>
        </>
    );
}