import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="bg-white p-6 mb-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">About Me</h2>
      <p>I am a passionate IT professional with over 3.5 years of experience in software development, DevOps, and project management across the banking, healthcare, and technology industries. I enjoy taking on new challenges, solving problems, and helping organizations achieve their digital transformation goals.</p>
    </motion.section>
  );
}
