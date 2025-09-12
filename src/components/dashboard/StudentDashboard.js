import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Shield,
  BookOpen,
  CheckCircle,
  Clock,
  Inbox,
  BarChart3,
  ClipboardList,
  Award,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const StudentDashboard = () => {
  const { user, getEnabledModules, logout } = useApp();
  const navigate = useNavigate();
  const enabledModules = getEnabledModules();

  const handleModuleClick = (moduleId) => {
    navigate(`/student/module/${moduleId}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-3">
                <Shield className="text-blue-600 w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Disaster Management System
                </h1>
                <p className="text-sm text-gray-500">Student Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  Welcome, {user?.name || 'Student'}
                </p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <LogOut className="w-4 h-4 mr-2" aria-hidden="true" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Your Training Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Access your assigned disaster management training modules below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="text-blue-600 w-5 h-5" aria-hidden="true" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  Available Modules
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {enabledModules.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle
                  className="text-green-600 w-5 h-5"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <p className="text-lg font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="text-yellow-600 w-5 h-5" aria-hidden="true" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">In Progress</p>
                <p className="text-lg font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Your Training Modules
          </h3>

          {enabledModules.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Inbox className="text-gray-400 w-8 h-8" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                No modules assigned
              </h4>
              <p className="text-gray-500">
                Contact your administrator to get access to training modules.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enabledModules.map((module) => (
                <div
                  key={module.id}
                  onClick={() => handleModuleClick(module.id)}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-200 hover:border-blue-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mr-4">
                        <span className="text-2xl">{module.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {module.name}
                        </h4>
                        <p className="text-sm text-gray-500">Training Module</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {module.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Available
                      </span>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        Start Training
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              aria-label="View Progress"
              className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mr-3">
                <BarChart3 className="text-blue-600 w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                View Progress
              </span>
            </button>

            <button
              aria-label="Training History"
              className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mr-3">
                <ClipboardList
                  className="text-green-600 w-4 h-4"
                  aria-hidden="true"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Training History
              </span>
            </button>

            <button
              aria-label="Achievements"
              className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-lg mr-3">
                <Award className="text-yellow-600 w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Achievements
              </span>
            </button>

            <button
              aria-label="Help and Support"
              className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg mr-3">
                <HelpCircle
                  className="text-purple-600 w-4 h-4"
                  aria-hidden="true"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Help & Support
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
