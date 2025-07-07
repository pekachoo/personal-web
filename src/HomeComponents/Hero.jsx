import { useEffect, useState } from 'react';

export default function Hero() {
  const text = "Welcome!";
  const [visibleLetters, setVisibleLetters] = useState(0);

  const [visibleText, setVisibleText] = useState(false);
  const [imageFade, setImageFade] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const typingSpeed = 100;
  useEffect(() => {
    if (visibleLetters < text.length) {
      const timer = setTimeout(() => {
        setVisibleLetters(visibleLetters + 1);
      }, typingSpeed); // adjust speed
      return () => clearTimeout(timer);
    }
  }, [visibleLetters]);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setVisibleText(true);
    }, text.length * typingSpeed + 1000); //delay 1000 after typing effect
    return () => clearTimeout(timer2);
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setImageFade(true);
    }, text.length * typingSpeed + 1500); //ddelay 1500 after typing effect
    return () => clearTimeout(timer3);
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowScroll(true);
    }, text.length * typingSpeed + 2500);
    return () => clearTimeout(timer3);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 py-16">      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
            {
              text.split('').slice(0, visibleLetters).join('') + 
              (visibleLetters < text.length ? '|' : '')
            }
          </h1>
          <div className={`transition-opacity duration-1000 ${visibleText ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-2xl text-red-600 font-semibold mb-4">Hey! I'm Jason.</p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
              I’m a first-year computer science student at the University of Waterloo,
              passionate in robotics and software engineering. Contact me if you ever
              want to work on anything!
            </p>
            <a href="/about">
              <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition">
                Learn more about me!
              </button>
            </a>
          </div>
        </div>

        <div className={`mt-10 md:mt-0 md:ml-12 border-4 border-gray-200 rounded-lg shadow-lg p-2 bg-white transition-opacity duration-1000 ${imageFade ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src="src/assets/IMG_6073.jpg"
            alt="Hero"
            className="w-80 h-80 object-cover rounded-md"
          />
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <div className={`animate-bounce text-6xl text-gray-600 hover:text-black transition duration-300 cursor-pointer ${showScroll ? 'opacity-100' : 'opacity-0'}`}>
          ↓
        </div>
      </div>

    </section>

  );
}
