import { useEffect, useState } from 'react';

export default function Hero() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 1000); // delay 1 sec

        return () => clearTimeout(timer);
    }, []);

    return (
      <section className="flex flex-col md:flex-row justify-between items-center px-6 py-16">
        <div className="max-w-xl">
          <h1 className={'text-5xl font-bold mb-4 transition-opacity duration-1000 ${fadeIn ? 'opacity-0' : 'opacity-100'}'}>Welcome!</h1>
          
          <p className="text-red-600 text-2xl font-bold mb-2">Hey! I'm Jason.</p>
          <p className="text-lg mb-6">
            I’m a first-year computer science student at the University of Waterloo,
            passionate in robotics and software engineering. Contact me if you ever
            want to work on anything!
          </p>
          <a href="#about">
            <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition">
              Learn more about me!
            </button>
          </a>
        </div>
        <div className="mt-10 md:mt-0 md:ml-12">
          <img src="/assets/sample-image.jpg" alt="Hero" className="w-80 h-80 object-cover rounded-md" />
        </div>
      </section>
    );
}  