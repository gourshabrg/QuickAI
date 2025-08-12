import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8">
      <h1 className="text-6xl font-bold text-[#3C81F6] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link to="/ai" className="px-6 py-2 bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white rounded shadow hover:from-[#2b5db6] hover:to-[#6d25a8] transition">Go to Dashboard</Link>
    </div>
  );
};

export default NotFound;
