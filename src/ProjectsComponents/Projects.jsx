export default function Projects() {
    const featuredProjects = [
      {
        title: 'ROS Mecanum Robot',
        description: 'Simulated a mecanum-drive robot in Gazebo using ROS 2, SLAM Toolbox, and Nav2. Compared performance to differential drive using dynamic obstacle courses.',
        image: '/assets/placeholder1.jpg',
      },
      {
        title: 'LangChain + AI Tools',
        description: 'Built a custom LangChain workflow for AI-powered lesson generation and integrated it into a production frontend with Spring Boot and React.',
        image: '/assets/placeholder2.jpg',
      },
    ];
  
    const sideProjects = [
      'Three.js Star Map',
      'Object Detection with OpenCV',
      'Slack Bot with Python',
      'Arduino Sensor Logger',
      'Hackathon Productivity Tracker',
      'Custom PID Tuner for FTC Robots',
    ];
  
    return (
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
  
        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Side Projects Grid */}
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Projects</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sideProjects.map((title, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-medium text-gray-800 text-sm">{title}</h4>
              <p className="text-xs text-gray-500 mt-1">Side project / personal build</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  