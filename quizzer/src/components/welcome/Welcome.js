import React, { useState, useEffect } from 'react';
import "./Welcome.css";

const Welcome = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
  
        // Calculate new position with containment
        const newX = Math.min(Math.max(e.clientX, 0), windowWidth - 80); // Limit x between 0 and window width - border width
        const newY = Math.min(Math.max(e.clientY, 0), windowHeight - 65); // Limit y between 0 and window height - border height
  
        setPosition({ x: newX, y: newY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className="welcome">
        <div
            className="parallax-border"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          >
            <div className="welcome-info">
                <span className='content-1'>
                    <p>Struggling to Make English Learning Fun? We've all been there. Textbooks and endless drills can feel like a snoozefest. But what if learning English could be engaging, interactive, and even...dare we say...fun?</p>
                </span>
              </div>
          </div>
      </div>
    );
  };

  export default Welcome;

