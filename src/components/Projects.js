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
        <h3 className="text-lg text-blue-800 mt-4"><a href="https://github.com/daffa0309/portfolio" target="_blank" rel="noopener noreferrer">Prepaid Card System (BNI)</a></h3>
        <p>• Spearheaded the deployment and debugging of Indonesia National Bank’s prepaid card system, ensuring 99.9% uptime and system resilience across SIT, UAT, and production environments.</p>

<p>• Designed and implemented a high-availability architecture, reducing downtime and improving customer transaction reliability.</p>

<p>• Collaborated with cross-functional teams (DevOps, backend, vendor engineers) to resolve critical application layer issues under tight deadlines. </p>

<p>• Automated deployment processes and improved CI/CD pipelines, reducing manual intervention by 30%. </p>

<p>• Conducted post-implementation reviews, providing insights that improved future release cycles and enhanced system stability.</p>

        <h3 className="text-lg text-blue-800 mt-4"><a href="https://github.com/daffa0309/HIP-API?tab=readme-ov-file#-hospital-information-system-api" target="_blank" rel="noopener noreferrer">Hospital Information System</a></h3>
        <p>• Developed REST APIs and front-end applications to digitalize hospital workflows, improving efficiency in patient registration, medical records, and billing management.</p>

<p>• Designed a scalable backend (Node.js) to handle high-volume patient data securely and reliably.</p>

<p>• Built custom hospital-specific forms and modules for outpatient, inpatient, and pharmacy workflows, reducing manual data entry errors by 40%.</p>

<p>• Integrated role-based access control (RBAC) for doctors, nurses, and administrative staff to ensure data privacy compliance (HIPAA-like standards).</p>

<p>• Improved overall hospital efficiency by reducing processing time for patient data retrieval by 35%. </p>

        <h3 className="text-lg text-blue-800 mt-4"><a href="https://github.com/daffa0309/bi-dashboard?tab=readme-ov-file#tableau-dashboard-manager" target="_blank" rel="noopener noreferrer">Business Intelligence Dashboards</a></h3>
        <p>• Add new dashboard entries with a name and public URL.</p>

<p>• View added dashboards within the interface.</p>

<p>• User-friendly form to submit new dashboards.</p>

<p>• Clean and modern UI design.</p>
   </div>
    </motion.section>
  );
}
