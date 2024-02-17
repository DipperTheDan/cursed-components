import React, { useState, useEffect } from 'react';
import styles from "./button.module.css";


export interface ButtonProps {
  children?: React.ReactNode;
  // onClick?: () => void;
}

const Button = ({children = "Button text"}: ButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [renderButton, setRenderButton] = useState(true);

  const randomPositionGenerator = () => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    const handleMouseOver = () => {
      // Move away from the mouse by updating the position
      randomPositionGenerator();
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);


  const hideButton = () => {
    setRenderButton(false);

    setTimeout(() => {
      randomPositionGenerator();
      setRenderButton(true);  
    }, 2000);
  };

  const handleClick = () => {
    hideButton();
  };

  return ( renderButton ?
    <button
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: 'pointer',
      }}
      className={styles.button}
      onClick={handleClick}
    >
      {children}
    </button> : null
  );
};

export default Button;
