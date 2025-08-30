import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      className="bg-white p-6 mb-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Contact</h2>
      <p>Email: <a href="mailto:daffa@email.com" className="text-blue-600">daffa@email.com</a></p>
      <p>GitHub: <a href="https://github.com/daffa0309" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/daffa0309</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/daffaahmad06" target="_blank" rel="noopener noreferrer" className="text-blue-600">linkedin.com/in/daffaahmad06</a></p>
    </motion.section>
  );
}
