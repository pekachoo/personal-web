const roboticsSkills = [
    'ROS', 'Gazebo', 'Arduino', 'Java (FTC SDK)', 'OpenCV', 'C++ (VEX Pros)', 'Python', 'PyTorch', 'Launch Files (ROS)',
  ];
  
  const webSkills = [
    'JavaScript', 'Three.js', 'HTML', 'CSS', 'React', 'Spring Boot', 'LangChain',
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Skills</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Robotics Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">🤖 Robotics & AI</h3>
            <div className="flex flex-wrap gap-3">
              {roboticsSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Web Dev Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">🌐 Web Development</h3>
            <div className="flex flex-wrap gap-3">
              {webSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }