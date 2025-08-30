import React from 'react';

export default function Header() {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">Daffa Ahmad Rivaldi</h1>
      <p className="font-medium text-gray-600 mb-4">IT Professional | Software Developer | DevOps | Project Manager</p>
      <div className="inline-flex gap-4">
        <a href="mailto:daffa@email.com" className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">📧 Email</a>
        <a href="https://github.com/daffa0309" target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">🛠 GitHub</a>
        <a href="https://linkedin.com/in/daffaahmad06" target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">💼 LinkedIn</a>
      </div>
    </header>
  );
}
