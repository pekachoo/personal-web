export default function About() {
    return (
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/assets/profile.jpg" // Replace with your photo
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full border-4 border-red-500"
          />
  
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              I’m a first-year Computer Science student at the University of Waterloo.
              My passion for computer science started when I became the software lead
              for my FTC robotics team, 18844.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Even though I study CS, I love the engineering side of things too —
              from building robots to experimenting with new tools. I’m always looking
              to explore new technologies, challenge myself, and collaborate with others.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Feel free to reach out if you're working on something cool — I’m always open to collaborating or just chatting!
            </p>
          </div>
        </div>
      </section>
    );
  }