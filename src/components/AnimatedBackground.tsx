
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [elements, setElements] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Create initial elements
    createInitialElements();

    // Add new elements periodically
    const interval = setInterval(() => {
      addNewElement();
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const createInitialElements = () => {
    const initialElements = [];
    for (let i = 0; i < 15; i++) {
      initialElements.push(createRandomElement(i));
    }
    setElements(initialElements);
  };

  const addNewElement = () => {
    setElements(prevElements => {
      // Remove oldest elements if there are too many
      const updatedElements = [...prevElements];
      if (updatedElements.length > 40) {
        updatedElements.shift();
      }

      // Add a new element
      updatedElements.push(createRandomElement(Date.now()));
      return updatedElements;
    });
  };

  const createRandomElement = (key: number) => {
    // Give more variety to the animations
    const elementType = Math.random();
    const isRosePetal = elementType < 0.4;
    const isGoldenSparkle = elementType >= 0.4 && elementType < 0.8;
    const isHeartShape = elementType >= 0.8;

    const randomLeft = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = (Math.random() * 8) + 6;
    const randomSize = Math.random() * 0.5 + 0.7; // Scale factor between 0.7 and 1.2

    let className = '';
    if (isRosePetal) className = 'rose-petal';
    else if (isGoldenSparkle) className = 'golden-sparkle';
    else className = 'heart-shape';

    return (
      <motion.div
        key={key}
        className={className}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0, randomSize, randomSize, 0] }}
        transition={{
          duration: randomDuration,
          times: [0, 0.1, 0.9, 1],
          delay: randomDelay,
          ease: "easeInOut"
        }}
        style={{
          left: `${randomLeft}%`,
          transform: `rotate(${Math.random() * 360}deg)`
        }}
      />
    );
  };

  return (
    <>
      <div className="bokeh-enhanced"></div>
      <div className="royal-overlay"></div>
      {elements}
    </>
  );
};

export default AnimatedBackground;