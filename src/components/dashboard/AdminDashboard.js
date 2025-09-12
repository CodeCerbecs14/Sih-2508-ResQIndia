import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Shield,
  BookOpen,
  CheckCircle,
  Users,
  BarChart3,
  Settings,
  LogOut,
  FileText,
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, modules, toggleModule, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleModuleToggle = (moduleId) => {
    toggleModule(moduleId);
  };

  const enabledModulesCount = useMemo(
    () => Object.values(modules).filter((m) => m.enabled).length,
    [modules]
  );

  const totalModulesCount = useMemo(
    () => Object.keys(modules).length,
    [modules]
  );

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
                <p className="text-sm text-gray-500">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  Welcome, {user?.name || 'Admin'}
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Control Panel
          </h2>
          <p className="text-lg text-gray-600">
            Manage training modules and system settings for all users.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="text-blue-600 w-5 h-5" aria-hidden="true" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Total Modules</p>
                <p className="text-lg font-semibold text-gray-900">
                  {totalModulesCount}
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
                <p className="text-sm font-medium text-gray-500">
                  Enabled Modules
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {enabledModulesCount}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Users className="text-yellow-600 w-5 h-5" aria-hidden="true" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-lg font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <BarChart3
                  className="text-purple-600 w-5 h-5"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">
                  System Status
                </p>
                <p className="text-lg font-semibold text-green-600">Online</p>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-8 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Module Management
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Toggle modules ON/OFF to control student access
            </p>
          </div>
          <div className="p-6 space-y-6">
            {Object.values(modules).map((module) => (
              <div
                key={module.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mr-4">
                    <span className="text-2xl">{module.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {module.name}
                    </h4>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      module.enabled
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {module.enabled ? 'Enabled' : 'Disabled'}
                  </span>
                  <button
                    onClick={() => handleModuleToggle(module.id)}
                    aria-pressed={module.enabled}
                    aria-label={`Toggle ${module.name}`}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      module.enabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        module.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-3">
                <Users className="text-blue-600 w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                User Management
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Manage user accounts, roles, and permissions.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Manage Users
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mr-3">
                <BarChart3
                  className="text-green-600 w-5 h-5"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Analytics & Reports
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              View training progress and system analytics.
            </p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              View Reports
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg mr-3">
                <Settings
                  className="text-yellow-600 w-5 h-5"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                System Settings
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Configure system preferences and settings.
            </p>
            <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
              Open Settings
            </button>
          </div>
        </div>


        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Activity
            </h3>
          </div>
          <div className="p-6">
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <FileText className="text-gray-400 w-6 h-6" aria-hidden="true" />
              </div>
              <p className="text-gray-500">No recent activity to display</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
