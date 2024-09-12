import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

function App() {
  const copyGameLink = () => {
    const gameLink = generateGameLink(); // Assume this function generates the unique game link
    navigator.clipboard.writeText(gameLink).then(() => {
      toast.success("Copied game link to clipboard: " + gameLink);
      setTimeout(() => {
        window.location.href = `/game/${extractGameCode(gameLink)}`;
      }, 1000); // Wait for 1 second before redirecting
    }).catch((err) => {
      toast.error("Failed to copy game link to clipboard: " + err);
    });
  };

  const generateGameLink = () => {
    // Generate a unique game link
    const gameCode = Math.random().toString(36).substr(2, 9);
    return `${window.location.origin}/game/${gameCode}`;
  };

  const extractGameCode = (gameLink) => {
    // Extract the game code from the game link
    return gameLink.split('/').pop();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid primary-content',
            padding: '16px',
            color: '#808080',
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