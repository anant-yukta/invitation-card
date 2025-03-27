import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeSection = () => {
  const [copied, setCopied] = useState(false);

  // Event Details
  const eventTitle = "Anant and Yukta's Wedding";
  const eventLocation = "Shiv Sagar Mangal Karyalaya, Gondur Airport Rd, Mangalmurti Colony, Dhule, Walwadi, Maharashtra 424002";
  const eventDetails = "We are honored to invite you to celebrate our special day with us.";
  const startDate = "20250510T123500Z"; // YYYYMMDDTHHmmssZ (UTC format)
  const endDate = "20250510T180000Z";

  // Google Calendar Event Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&dates=${startDate}/${endDate}`;

  // Set QR Code to Google Calendar URL
  const websiteUrl = googleCalendarUrl;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      className="py-12 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-md mx-auto">
        <h2 className="font-serif text-3xl mb-4 text-gray-800">Save The Date</h2>
        <div className="divider"></div>

        <div className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg border border-wedding-gold/10 shadow-sm">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="p-4 bg-white rounded-md border border-wedding-gold/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <QRCodeSVG
                value={websiteUrl}
                size={200}
                bgColor={"#FFFFFF"}
                fgColor={"#000000"}
                level={"H"}
                includeMargin={false}
              />
            </motion.div>

            <p className="text-gray-700 text-sm mt-2">
              Scan this QR code to add our wedding event to your Google Calendar.
            </p>

            <div className="flex space-x-4 mt-2">
              <motion.button
                className="inline-flex items-center justify-center py-2 px-4 bg-wedding-gold/90 hover:bg-wedding-gold text-white rounded-md shadow-sm"
                onClick={copyToClipboard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </motion.button>

              <motion.a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-2 px-4 bg-white border border-wedding-gold/30 text-gray-700 rounded-md shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Add to Google Calendar
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default QRCodeSection;
