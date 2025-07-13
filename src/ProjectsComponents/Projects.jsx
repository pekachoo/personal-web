import { motion } from 'framer-motion';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'Voyager-O',
      description: "NASA Space Apps project that led us to global nominees! Used three.js and NASA's star data to convert and simulate what the starry sky looks like on other planets. (Click the image to try the project!)",
      image: '/projects/spaceapps.png',
      tags: ['Three.js', 'Javascript', 'Fetch API', 'Frontend Development', 'WebGL'],
      link: 'https://voyager-o.ca/'
    },
    {
      title: 'AP Research Mecanum + Diff Drive Simulation',
      description: "My year long AP Research project that simulated a differential and mecanum drive robot on Gazebo which used SLAM and ROS to move and autonomously navigate through dynamic obstacles. (Click the image to view the paper that got me a 5!)",
      image: '/projects/APR.png',
      tags: ['ROS', 'Linux', 'Gazebo', 'Bash', 'SLAM', 'Python', 'Nav2', 'Control Systems', 'LiDAR', 'Path Planning'],
      link: 'https://docs.google.com/document/d/1ob_owi9TlYkvl_Y6qxZUS5uPTYzTJIU1kwLsJOCMNjw/edit?tab=t.0'
    },
  ];

  const sideProjects = [
    {
      title: 'Curriculum Generator',
      description: 'Worked on during my summer internship at Wizrobotics. Worked on lesson component development using react to make widgets. Also restructured on the LangChain AI Agent that parses a pdf lesson into an interactive react lesson.',
      image: '/projects/ftcworlds.jpg',
      tags: ['LangChain', 'AI API', 'React', 'Javascript', 'Backend Development'],
    },
    {
      title: 'FTC Worlds Robot',
      description: 'Three motor PID Controlled linear slides with mecanum drive. Python snapscripts and neural network detection was used to align to game pieces. As software lead brought us to FTC Worlds 2024-2025!',
      image: '/projects/ftcworlds.jpg',
      tags: ['Android Studio', 'Java', 'OpenCV', 'Control Theory', 'PID Control', 'AI Detection', 'Odometry'],
    },
    {
      title: 'VEX Worlds',
      description: 'Custom odometry and PID algorithms for autonomous navigation with a differential drive that picked up rings to score. Brought us to 2024-2025 VEX Worlds as Captain!',
      image: '/projects/vexworlds.jpg',
      tags: ['C++ (PROS)', 'Odometry', 'Robotics', 'Motion Planning', 'AMCL', 'PID Control'],
    },
    {
      title: '2023-2024 Season VEX Bot',
      description: 'Custom odometry and PID used to autonomously score acorns into a goal. Brought us to 2023-2024 VEX Worlds as software lead!',
      image: '/projects/vex1bot.jpg',
      tags: [],
    },
    {
      title: 'UTRAHacks Robot',
      description: 'Robot built for UTRAHacks that used inverse kinematics to grab soil samples and measure water density to determine soil health.',
      image: '/projects/utra_bot.jpg',
      tags: ['C++', 'Arduino'],
    },
    {
      title: 'Turret Side Job',
      description: 'Side project done for my job where I 3D designed a lazy susan system which used OpenCV and contour detection to align to yellow poles.',
      image: '/projects/turret.jpg',
      tags: ['OpenCV', 'PID Control', 'Fusion360'],
    },
    {
      title: '2023-2024 Season FTC Bot',
      description: 'Mecanum Bot who scored hexagons on a frame',
      image: '/projects/ftc4bot.jpg',
      tags: [],
    },
    {
      title: '2021-2022 Season FTC Bot',
      description: 'Simple and reliable bot used to score game pieces on a tower.',
      image: '/projects/ftc2bot.png',
      tags: [],
    },
    {
      title: '2020-2021 Season FTC Bot',
      description: 'First robot ever built — where it all began.',
      image: '/projects/ftc1bot.png',
      tags: [],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, boxShadow: '0 0 32px 8px rgba(59,130,246,0.4)' },
    visible: (i = 1) => ({
      opacity: 1,
      boxShadow: '0 4px 24px 0 rgba(59,130,246,0.10)',
      transition: {
        delay: i * 0.3,
        duration: 1.0,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>

      {/* Featured Projects */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {featuredProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-[1.01]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            variants={cardVariants}
            transition={{ delay: index * 0.12, duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Projects</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sideProjects.map((project, i) => (
          <motion.a
            key={i}
            href="#"
            className="p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-[1.01] flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            variants={cardVariants}
            transition={{ delay: i * 0.25, duration: 1.5, ease: 'easeOut' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover mb-4 rounded transition-transform duration-300 hover:scale-105"
            />
            <h4 className="font-medium text-gray-800 text-sm mb-2">{project.title}</h4>
            <p className="text-xs text-gray-500">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags &&
                project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
