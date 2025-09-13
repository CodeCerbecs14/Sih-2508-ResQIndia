import React from 'react';

const RescueCoordination = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <span className="text-3xl">🚁</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Rescue Coordination
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master rescue operations, coordination protocols, and emergency response
            management through advanced simulation training and team exercises.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <span className="text-5xl">🎯</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Rescue Coordination Center
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              This area will contain the Phaser.js rescue coordination simulation once implemented.
              Students will practice rescue operations and team coordination in a virtual environment.
            </p>
            <div className="bg-green-50 border-2 border-dashed border-green-200 rounded-lg p-8">
              <p className="text-green-700 font-medium">
                🚧 Simulation Coming Soon 🚧
              </p>
              <p className="text-green-600 text-sm mt-2">
                Interactive rescue coordination simulation will be loaded here
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
                Understand rescue operation planning and execution
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Learn team coordination and communication protocols
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Master resource allocation and logistics management
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Practice emergency response decision-making
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
                Rescue Operations Fundamentals
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎮</span>
                Team Coordination Simulation
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📡</span>
                Communication Systems
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🗺️</span>
                Resource Management
              </li>
            </ul>
          </div>
        </div>

        {/* Rescue Team Roles */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">👥</span>
            Rescue Team Roles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <span className="text-xl">👨‍💼</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Incident Commander</h4>
              <p className="text-sm text-gray-600">
                Overall coordination and decision-making authority
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <span className="text-xl">🚁</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Rescue Team</h4>
              <p className="text-sm text-gray-600">
                Direct rescue operations and victim extraction
              </p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                <span className="text-xl">📡</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Communications</h4>
              <p className="text-sm text-gray-600">
                Maintain radio contact and information flow
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <span className="text-xl">🏥</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Medical Team</h4>
              <p className="text-sm text-gray-600">
                Provide first aid and medical support
              </p>
            </div>
          </div>
        </div>

        {/* Coordination Principles */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">⚡</span>
            Coordination Principles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Communication</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Clear and concise radio protocols</li>
                <li>• Regular status updates</li>
                <li>• Emergency communication procedures</li>
                <li>• Information sharing protocols</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Resource Management</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Equipment allocation and tracking</li>
                <li>• Personnel deployment strategies</li>
                <li>• Supply chain management</li>
                <li>• Backup resource planning</li>
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
            <div className="bg-green-500 h-3 rounded-full" style={{ width: '0%' }}>
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

export default RescueCoordination;


