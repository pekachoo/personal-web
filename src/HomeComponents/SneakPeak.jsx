import { useEffect, useRef, useState } from 'react';
import vexImage from '/projects/vexworlds.jpg';
import ftcImage from '/projects/ftcworlds.jpg';


export default function SneakPeek() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } // Trigger when 80% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Gazebo AP Research Sim',
      description: 'Simulated a mecanum-drive robot in Gazebo using ROS 2 and SLAM Toolbox. Wrote a paper on it which was used for my AP Research project (ended up getting a 5)',
      image: '/assets/ros-mecanum.png',
    },
    {
      title: 'VEX Worlds!',
      description: 'Led software for a VEX team reaching Worlds with custom odometry. ',
      image: vexImage,
    },
    {
      title: 'FTC Worlds!',
      description: 'Took 5 years to do as software lead but we did it! One of my most proud accomplishments. Click to have a look at our library!',
      image: ftcImage,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`px-6 pt-10 md:pt-20 pb-20 max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}      
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Things I've Done!</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/projects">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            View All Projects
          </button>
        </a>
      </div>
    </section>
  );
}
