export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <div className="flex-1">
            <a href="/home" className="text-xl font-bold">Jason Liu</a>
          </div>
          <ul className="flex space-x-6 justify-end flex-1">
            <li><a href="/about" className="hover:text-red-500">About</a></li>
            <li><a href="/projects" className="hover:text-red-500">Projects</a></li>
            <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  