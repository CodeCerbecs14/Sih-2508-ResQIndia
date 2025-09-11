import React from 'react';

const FloodSimulation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <span className="text-3xl">🌊</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Flood Simulation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master flood safety protocols, evacuation procedures, and emergency response
            strategies through realistic water-based disaster simulations.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
              <span className="text-5xl">🏠</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Flood Simulation Environment
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              This area will contain the Phaser.js flood simulation once implemented.
              Students will practice flood evacuation and safety measures in a virtual environment.
            </p>
            <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-8">
              <p className="text-blue-700 font-medium">
                🚧 Simulation Coming Soon 🚧
              </p>
              <p className="text-blue-600 text-sm mt-2">
                Interactive flood simulation will be loaded here
              </p>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-3">🎯</span>
              Learning Objectives
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Recognize flood warning signs and weather patterns
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Learn proper evacuation procedures and routes
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Understand flood safety equipment and supplies
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Practice water rescue and survival techniques
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-3">📚</span>
              Training Modules
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📖</span>
                Flood Types and Causes
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎮</span>
                Evacuation Simulation
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🛟</span>
                Water Safety and Rescue
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📱</span>
                Emergency Communication
              </li>
            </ul>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">⚠️</span>
            Flood Safety Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">Before a Flood:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Create an emergency kit</li>
                <li>• Know your evacuation routes</li>
                <li>• Stay informed about weather</li>
                <li>• Secure important documents</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">During a Flood:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Move to higher ground immediately</li>
                <li>• Avoid walking through floodwater</li>
                <li>• Turn off utilities if safe to do so</li>
                <li>• Listen to emergency broadcasts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Module Progress
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div className="bg-blue-500 h-3 rounded-full" style={{ width: '0%' }}>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Complete the simulation to track your progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloodSimulation;



