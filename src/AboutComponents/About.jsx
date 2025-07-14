import React, { useEffect, useState, useRef } from 'react';
import AboutIMG from '/aboutpic.jpg';

export default function About() {
  const [showScroll, setShowScroll] = useState(false);
  const [fadeText, setFadeText] = useState(false);
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeText(true);
    }, 400); 
    return () => clearTimeout(timer);
  }, []);

  const [fadeImage, setFadeImage] = useState(false);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setFadeImage(true);
    }, 1000);
    return () => clearTimeout(timer2);
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowScroll(true);
    }, 2000);
    return () => clearTimeout(timer3);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  

  return (
    <section id="about" className="flex flex-col md:flex-row justify-between items-center px-0 py-36 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className={`flex-1 transition-opacity duration-1000 ${
          fadeText ? 'opacity-100' : 'opacity-0'
        }`}>
          <h2 className="text-5xl font-bold mb-6 py-5 font-poppins">About Me</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6 font-inter">
            I’m a first year computer science student at the University of Waterloo. I’ve found my passion for computer science from being software lead for my FTC Robotics team 18844. Despite being a computer science major, I actually love engineering and tinkering with projects (you can see some of my projects in the projects tab).
          </p>
          <p className="text-lg text-gray-800 leading-relaxed font-inter">
            I feel like there's still so much I don't know about what computer science is, and I want to keep learning to see how far I can push the boundaries of software and technology—whether it’s developing a robot, building tools that solve real problems, or experimenting just for the fun of it! Feel free to shoot me an email or connect if you ever want to work on something, I’m always open to doing projects and getting to know people!
          </p>
        </div>

        <div className={`flex-shrink-0 border-4 border-gray-200 rounded-lg shadow-lg p-2 bg-white transition-opacity duration-1000 ${
          fadeImage ? 'opacity-100' : 'opacity-0'
        }`}>
          <img
            src={AboutIMG} // replace with your actual image path
            alt="Jason Liu"
            className="w-96 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div onClick={scrollToBottom} className={`animate-bounce text-6xl text-gray-600 hover:text-black transition duration-300 cursor-pointer ${showScroll ? 'opacity-100' : 'opacity-0'}`}>
          ↓
        </div>
      </div>
    </section>
  );
}
