import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/invitation-card/uploads/f0f5e2a8-0de4-4427-b055-0b742d64b858.png",
  "/invitation-card/uploads/334081c4-055b-43d7-88ff-f8213b49483f.png",
  "/invitation-card/uploads/ebc8ca28-db9d-4b64-857c-049eca7c99bd.png",
  "/invitation-card/uploads/f68d9120-2a9b-4b93-892a-b942e6890dde.png",
  "/invitation-card/uploads/2d70d9a3-0c2a-4eb1-a365-5390dad9141e.png",
  "/invitation-card/uploads/eb29f5c1-9f4c-4392-823f-d4f43af3ed66.png",
  "/invitation-card/uploads/268e69be-5d92-4d64-8947-91208f6f8db7.png",
  "/invitation-card/uploads/71d15647-8dc3-470e-80d2-0a105735a502.png"
];

const CoupleGallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="my-12 rounded-xl overflow-hidden w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <h2 className="text-center text-2xl font-serif text-gray-800 mb-6">Our Journey Together</h2>

      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-wedding-gold/20 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={index} // This forces re-render for each image
            src={images[index]}
            alt={`Anant and Yukta - Photo ${index + 1}`}
            className="absolute w-full h-full object-cover rounded-xl"
            // className="w-full aspect-[4/3] object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <div className="divider mt-8"></div>
    </motion.div>
  );
};

export default CoupleGallery;
