import React from 'react';
import { useParams } from 'react-router-dom';
import EarthquakeSimulation from './EarthquakeSimulation';
import FloodSimulation from './FloodSimulation';
import FireDrill from './FireDrill';
import RescueCoordination from './RescueCoordination';

const ModuleRouter = () => {
  const { moduleId } = useParams();

  // Map module IDs to their respective components
  const moduleComponents = {
    earthquake: EarthquakeSimulation,
    flood: FloodSimulation,
    fireDrill: FireDrill,
    rescue: RescueCoordination,
  };

  const ModuleComponent = moduleComponents[moduleId];

  if (!ModuleComponent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <span className="text-2xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Module Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The requested training module could not be found.
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return <ModuleComponent />;
};

export default ModuleRouter;


