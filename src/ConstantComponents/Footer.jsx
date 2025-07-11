import GitLogo from '/logos/github_logo.png';
import LILogo from '/logos/linkedin_logo.webp';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-100 text-center md:text-left">
          © 2024–2025 Created and Built by Jason Liu
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/pekachoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitLogo} alt="GitHub" className="w-6 h-6 hover:opacity-70 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/jason-liu-646b30273/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LILogo} alt="LinkedIn" className="w-6 h-6 hover:opacity-70 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}