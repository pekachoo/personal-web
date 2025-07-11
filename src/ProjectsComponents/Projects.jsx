import { motion } from 'framer-motion';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'FTC Worlds Robot',
      description: 'Custom drivetrain and vision stack built for FTC Worlds 2024.',
      image: '/projects/ftcworlds.jpg',
      tags: ['FTC', 'Java', 'Vision'],
    },
    {
      title: 'Space Apps',
      description: 'NASA Hackathon entry with orbital simulation and ML analysis.',
      image: '/projects/spaceapps.png',
      tags: ['Python', 'OpenCV', 'Hackathon'],
    },
  ];

  const sideProjects = [
    {
      title: 'VEX Worlds',
      description: 'Custom odometry and PID algorithms for high-precision scoring.',
      image: '/projects/vexworlds.jpg',
      tags: ['VEX', 'Odometry', 'C++'],
    },
    {
      title: '2023-2024 Season VEX Bot',
      description: 'All-rounder bot with autonomous path planning.',
      image: '/projects/vex1bot.jpg',
      tags: ['VEXcode', 'Auton'],
    },
    {
      title: 'UTRAHacks Robot',
      description: 'Robot built for university robotics hackathon.',
      image: '/projects/utra_bot.jpg',
      tags: ['C++', 'Arduino'],
    },
    {
      title: 'Turret Side Job',
      description: 'Side project to build a turret with motion detection.',
      image: '/projects/turret.jpg',
      tags: ['ESP32', 'CV'],
    },
    {
      title: '2023-2024 Season FTC Bot',
      description: 'Advanced bot with linear slide and turret functionality.',
      image: '/projects/ftc4bot.jpg',
      tags: ['FTC', 'Java'],
    },
    {
      title: '2021-2022 Season FTC Bot',
      description: 'Simple and reliable bot used for qualifiers.',
      image: '/projects/ftc2bot.png',
      tags: ['FTC', 'Beginners'],
    },
    {
      title: '2020-2021 Season FTC Bot',
      description: 'First robot ever built — where it all began.',
      image: '/projects/ftc1bot.png',
      tags: ['FTC', 'First Project'],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
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
            href="#"
            className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-[1.01]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            transition={{ delay: i * 0.12, duration: 0.7, ease: 'easeOut' }}
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
