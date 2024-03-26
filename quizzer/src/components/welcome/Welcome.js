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
        <div>
            <h1>Welcome</h1>
        </div>
          <div
            className="parallax-border"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          >
            <div className="welcome-info">
                <span className='content-1'>
                    <p>Learning English doesn't have to be a chore! Here, we'll show you how to make it fun and engaging with games and pictures.</p>
                </span>
                <span className='content-2'>
                    
                </span>
            </div>
          </div>
      </div>
    );
  };

  export default Welcome;