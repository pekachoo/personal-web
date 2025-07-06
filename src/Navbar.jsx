export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-xl font-semibold">Jason Liu</div>
        <ul className="flex space-x-6 font-medium">
            <li><a href="#about" className="hover:text-red-500">About</a></li>
            <li><a href="#projects" className="hover:text-red-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
        </ul>
        </nav>
    );
}
