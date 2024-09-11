import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const copyGameLink = () => {
    // TODO: Implement actual game link
    // So far this just copys a placeholder link
    const gameLink = "https://dummy.link";
    navigator.clipboard.writeText(gameLink).then(() => {
      toast.success("Copied game link to clipboard: " + gameLink);
    }).catch((err) => {
      toast.error("Failed to copy game link to clipboard: " + err);
    });
  };
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid primary-content',
            padding: '16px',
            color: '#',
          },
        }}
      />
      {/* Main container with a card style */}
      <div className="text-center p-10 bg-primary-content shadow-xl rounded-2xl max-w-lg mx-auto">
        
        {/* Title with subtle shadow */}
        <h1 className="text-5xl font-bold text-primary-content bg-gradient-to-r from-secondary-content via-secondary to-secondary-content rounded-lg mb-6 p-6 shadow-md">
          Online Typing Race
        </h1>

        {/* Subheading with more details */}
        <p className="text-lg text-gray-200 mb-6">
          Challenge your friends and see who types the fastest!
        </p>
        
        {/* Button with hover effects and spacing */}
        <div className="mt-6">
          <button 
          className="btn btn-accent-content btn-outline px-6 py-3 text-lg font-semibold rounded-full transition-transform transform hover:scale-105 hover:bg-primary hover:text-white shadow-md"
          onClick={copyGameLink}
          >
            <span className="mr-2">📋</span> Copy Game Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
