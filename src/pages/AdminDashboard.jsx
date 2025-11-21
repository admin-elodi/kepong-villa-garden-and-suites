import React from 'react';
import adminbg from '@/assets/videos/adminbg.mp4'; // Adjust path as needed

function AdminDashboard() {
  const clickyUrl = "https://login.getclicky.com/";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-70 px-4 pb-35 text-white font-mono overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-0"
        src={adminbg}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content Overlay */}
      <div className="relative z-10 bg-gray-900 bg-opacity-70 rounded-xl shadow-2xl max-w-lg w-full p-8 ring-2 ring-red-600 ring-opacity-50">
        <h1
          className="text-2xl font-extrabold text-center text-red-600 mb-6 tracking-wide select-none"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          Kepong Site Data
        </h1>
        <p className="text-gray-300 text-lg mb-2 leading-relaxed select-text">
          Welcome to the admin lounge. Click below to check real-time user data about website visitors.
        </p>
        <a
          href={clickyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-8 py-4 rounded bg-gradient-to-r from-red-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white font-bold tracking-widest uppercase transition transform hover:scale-105"
        >
          Check Site Data
        </a>
      </div>
    </div>
  );
}

export default AdminDashboard;
