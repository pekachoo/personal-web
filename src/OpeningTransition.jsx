import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OpeningTransition() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1500);
    const timer2 = setTimeout(() => navigate('/home'), 2500); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <div
      className={`flex items-center justify-center h-screen bg-black transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-5xl font-bold text-white tracking-wide animate-pulse">
        Welcome, I’m Jason
      </h1>
    </div>
  );
}
