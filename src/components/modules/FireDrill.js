import React from 'react';

const FireDrill = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <span className="text-3xl">🔥</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Fire Drill Training
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn fire safety protocols, evacuation procedures, and emergency response
            techniques through comprehensive fire drill simulations and training.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
              <span className="text-5xl">🚨</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Fire Drill Simulation
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              This area will contain the Phaser.js fire drill simulation once implemented.
              Students will practice fire safety and evacuation procedures in a virtual environment.
            </p>
            <div className="bg-red-50 border-2 border-dashed border-red-200 rounded-lg p-8">
              <p className="text-red-700 font-medium">
                🚧 Simulation Coming Soon 🚧
              </p>
              <p className="text-red-600 text-sm mt-2">
                Interactive fire drill simulation will be loaded here
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
                Identify fire hazards and prevention measures
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Learn proper evacuation procedures and routes
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Understand fire safety equipment usage
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Practice emergency communication protocols
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
                Fire Safety Fundamentals
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎮</span>
                Evacuation Drill Simulation
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🧯</span>
                Fire Extinguisher Training
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📞</span>
                Emergency Response Procedures
              </li>
            </ul>
          </div>
        </div>

        {/* Fire Safety Rules */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">🚨</span>
            Fire Safety Rules
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                <span className="text-xl">🚪</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Evacuate Immediately</h4>
              <p className="text-sm text-gray-600">
                Don't stop to collect belongings. Exit the building as quickly and safely as possible.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                <span className="text-xl">🪟</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Stay Low</h4>
              <p className="text-sm text-gray-600">
                If there's smoke, stay close to the ground where the air is cleaner and easier to breathe.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                <span className="text-xl">🚫</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Never Use Elevators</h4>
              <p className="text-sm text-gray-600">
                Always use stairs during a fire emergency. Elevators may stop working or open to fire floors.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Module Progress
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div className="bg-red-500 h-3 rounded-full" style={{ width: '0%' }}>
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

export default FireDrill;


