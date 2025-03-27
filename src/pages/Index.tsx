
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import InvitationHeader from '../components/InvitationHeader';
import CoupleGallery from '../components/CoupleGallery';
import EventDetails from '../components/EventDetails';
import VenueMap from '../components/VenueMap';
import RSVPSection from '../components/RSVPSection';
import Footer from '../components/Footer';
import CountdownTimer from '../components/CountdownTimer';
import QRCodeSection from '../components/QRCodeSection';
import HashtagGenerator from '../components/HashtagGenerator';
import AnimatedBackground from '../components/AnimatedBackground';
import InvitationScroll from '../components/InvitationScroll';

const Index = () => {
  useEffect(() => {
    // Set title
    document.title = "Anant & Yukta | Royal Wedding Invitation";
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-wedding-ivory relative"
    >


      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div
          className="relative overflow-hidden bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-wedding-gold/20 invitation-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <InvitationHeader />

          <InvitationScroll />
          <CoupleGallery />
          <CountdownTimer />
          <EventDetails />
          <VenueMap />
          <QRCodeSection />
          <HashtagGenerator />
          <RSVPSection />
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
