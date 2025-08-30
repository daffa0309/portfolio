import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
      className="bg-white p-6 mb-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="text-2xl text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
      <div>
        <h3 className="text-lg text-blue-800 mt-4">Prepaid Card System (BNI)</h3>
        <p>Led deployment and debugging for Indonesia National Bank's prepaid card system, ensuring high availability and resilience.</p>

        <h3 className="text-lg text-blue-800 mt-4">Hospital Information System</h3>
        <p>Built REST APIs and front-end applications for hospital management, improving efficiency in patient and data management.</p>

        <h3 className="text-lg text-blue-800 mt-4">Business Intelligence Dashboards</h3>
        <p>Designed and embedded Tableau dashboards to deliver actionable insights for decision-making.</p>
      </div>
    </motion.section>
  );
}
