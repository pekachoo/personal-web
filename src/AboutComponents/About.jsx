export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            I’m a first year computer science student at the University of Waterloo. I’ve found my passion for computer science from being software lead for my FTC Robotics team 18844. Despite being a computer science major, I actually love engineering and tinkering for projects (you can see some of my projects in the projects tab).
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            I feel like I’ve only touched the surface of what computer science is and I want to keep learning and pushing myself to explore how far we could push the boundaries of software and technology. Whether it’s developing a robot, building tools that solve real problems, or experimenting just for the fun of it! Please shoot me an email or text if you ever want to work on something, I’m always open to doing projects and getting to know people!
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/assets/your-photo.jpg" // replace with your actual image path
            alt="Jason Liu"
            className="w-96 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
