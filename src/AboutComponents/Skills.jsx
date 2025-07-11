import RosLogo from '/logos/Ros_logo.png';
import GazeboLogo from '/logos/gazebo_logo.png';
import ArduinoLogo from '/logos/arduino_logo.svg';
import JavaLogo from '/logos/java_logo.png';
import OpenCVLogo from '/logos/opencv_logo.png';
import ProsLogo from '/logos/pros_logo.png';
import PyTorchLogo from '/logos/pytorch_logo.png';
import PythonLogo from '/logos/python_logo.webp';
import XmlLogo from '/logos/xml_logo.svg';
import AsLogo from '/logos/as_logo.png';
import JSLogo from '/logos/js_logo.png';
import ThreeJSLogo from '/logos/threejs_logo.png';
import ReactLogo from '/logos/react_logo.png';
import HTMLLogo from '/logos/html_logo.png';
import SpringLogo from '/logos/spring_logo.svg';
import LangChainLogo from '/logos/langchain_logo.webp';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const roboticsLogos = [
  RosLogo,
  GazeboLogo,
  ArduinoLogo,
  JavaLogo,
  OpenCVLogo,
  ProsLogo,
  PyTorchLogo,
  PythonLogo,
  XmlLogo,
  AsLogo,
];

const webDevLogos = [
  JSLogo,
  ThreeJSLogo,
  ReactLogo,
  HTMLLogo,
  SpringLogo,
  LangChainLogo,
];

export default function Skills() {
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };
  return (
    <Parallax speed={20}>
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-14 text-center tracking-tight drop-shadow">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-700 text-center uppercase tracking-wide">Robotics & AI</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
              {roboticsLogos.map((logo, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center rounded-full shadow-lg bg-white/30 backdrop-blur-md border border-white/40 aspect-square p-2 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-red-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                  variants={logoVariants}
                >
                  <img src={logo} alt="robotics skill logo" className="object-contain w-12 h-12 sm:w-16 sm:h-16" />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-800 text-center uppercase tracking-wide">Web Development</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
              {webDevLogos.map((logo, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center rounded-full shadow-lg bg-white/30 backdrop-blur-md border border-white/40 aspect-square p-2 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-blue-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                  variants={logoVariants}
                >
                  <img src={logo} alt="web dev skill logo" className="object-contain w-12 h-12 sm:w-16 sm:h-16" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}