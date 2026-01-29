import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Event date: February 2, 2026, 00:00 IST
    const eventDate = new Date('2026-02-02T00:00:00+05:30'); // IST is UTC+5:30
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className="text-center">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 font-serif">Event Starts In</h3>
      <div className="flex justify-center space-x-2 md:space-x-4 perspective-1000">
        {timeUnits.map((unit, index) => (
          <div 
            key={unit.label}
            className="bg-gradient-to-br from-blue-600 to-blue-500 backdrop-blur-sm border-2 border-blue-700 rounded-lg md:rounded-xl p-2 md:p-4 min-w-[60px] md:min-w-[80px] transform-gpu hover:scale-110 transition-transform duration-300 shadow-lg"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${Math.sin(Date.now() / 2000 + index) * 3}deg) rotateY(${Math.cos(Date.now() / 2000 + index) * 3}deg)`
            }}
          >
            <div className="text-2xl md:text-3xl font-bold text-white font-serif mb-1">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-sm text-white font-serif">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm md:text-sm text-gray-700 mt-3 md:mt-4 font-serif px-2 font-semibold">
        2nd & 3rd February, 2026 | Gauhati University, Guwahati
      </p>
    </div>
  );
};

export default CountdownTimer; 