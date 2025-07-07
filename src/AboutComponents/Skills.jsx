import RosLogo from '../assets/Ros_logo.png';
import GazeboLogo from '../assets/gazebo_logo.png';
import ArduinoLogo from '../assets/arduino_logo.svg';
import JavaLogo from '../assets/java_logo.png';
import OpenCVLogo from '../assets/opencv_logo.png';
import ProsLogo from '../assets/pros_logo.png';
import PyTorchLogo from '../assets/pytorch_logo.png';
import PythonLogo from '../assets/python_logo.webp';
import XmlLogo from '../assets/xml_logo.svg';
import AsLogo from '../assets/as_logo.png';
import JSLogo from '../assets/js_logo.png';
import ThreeJSLogo from '../assets/threejs_logo.png';
import ReactLogo from '../assets/react_logo.png';
import HTMLLogo from '../assets/html_logo.png';
import SpringLogo from '../assets/spring_logo.svg';
import LangChainLogo from '../assets/langchain_logo.webp';
import { Parallax } from 'react-scroll-parallax';

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
  return (
    <Parallax speed={40}>
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-700 text-center">Robotics & AI</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {roboticsLogos.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white rounded-lg border border-gray-300 aspect-square p-1"
                >
                  <img src={logo} alt="robotics skill logo" className="object-contain w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800 text-center">Web Development</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {webDevLogos.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white rounded-lg border border-gray-300 aspect-square p-4"
                >
                  <img src={logo} alt="web dev skill logo" className="object-contain w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}