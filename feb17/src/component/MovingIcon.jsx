import { useState, useEffect } from 'react';
import '../App.css';

const MovingIcon = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 5);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const iconStyle = {
    position: 'relative',
    top: `${50 * Math.sin((angle * Math.PI) / 180)}px`,
    left: `${50 * Math.cos((angle * Math.PI) / 180)}px`,
  };

  return (
    <div className="moving-icon" style={iconStyle}>
      {/* Replace this with your actual icon component */}
      <div className="icon">&#9658;</div>
    </div>
  );
};

export default MovingIcon;