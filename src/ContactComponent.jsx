import GitLogo from '/logos/github_logo.png';
import LILogo from '/logos/linkedin_logo.webp';

export default function ContactComponent() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-lg">
            Feel free to{' '}
            <a href="mailto:liujason6162@gmail.com" className="text-blue-600 underline">
              email me
            </a>{' '}
            or connect on{' '}
            <a href="https://www.linkedin.com/in/jason-liu-646b30273/" className="text-blue-600 underline">
              LinkedIn
            </a>
            . I'm always open to chatting or working on something cool together!
          </p>
          <p className="text-lg font-semibold">Find me on:</p>
          <div className="flex justify-center md:justify-start space-x-10">
            <a
              href="https://github.com/pekachoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitLogo}
                alt="GitHub"
                className="w-20 h-20 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jason-liu-646b30273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LILogo}
                alt="LinkedIn"
                className="w-20 h-20 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
