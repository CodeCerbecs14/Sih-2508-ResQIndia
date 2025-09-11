import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { onAuthStateChange } from '../services/mockAuthService';

// Initial state for the application
const initialState = {
  // Authentication state
  user: null,
  isAuthenticated: false,
  
  // Module configuration (admin controls which modules are enabled)
  modules: {
    earthquake: {
      id: 'earthquake',
      name: 'Earthquake Simulation',
      description: 'Learn earthquake safety and response procedures',
      enabled: true,
      icon: '🌍'
    },
    flood: {
      id: 'flood',
      name: 'Flood Simulation',
      description: 'Practice flood evacuation and safety measures',
      enabled: true,
      icon: '🌊'
    },
    fireDrill: {
      id: 'fireDrill',
      name: 'Fire Drill',
      description: 'Fire safety training and evacuation procedures',
      enabled: false,
      icon: '🔥'
    },
    rescue: {
      id: 'rescue',
      name: 'Rescue Coordination',
      description: 'Learn rescue operations and coordination',
      enabled: true,
      icon: '🚁'
    }
  }
};

// Action types for the reducer
const ActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  TOGGLE_MODULE: 'TOGGLE_MODULE',
  UPDATE_MODULE_STATUS: 'UPDATE_MODULE_STATUS'
};

// Reducer function to handle state updates
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    
    case ActionTypes.TOGGLE_MODULE:
      return {
        ...state,
        modules: {
          ...state.modules,
          [action.payload.moduleId]: {
            ...state.modules[action.payload.moduleId],
            enabled: !state.modules[action.payload.moduleId].enabled
          }
        }
      };
    
    case ActionTypes.UPDATE_MODULE_STATUS:
      return {
        ...state,
        modules: {
          ...state.modules,
          [action.payload.moduleId]: {
            ...state.modules[action.payload.moduleId],
            enabled: action.payload.enabled
          }
        }
      };
    
    default:
      return state;
  }
};

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      if (user) {
        dispatch({
          type: ActionTypes.LOGIN,
          payload: user
        });
      } else {
        dispatch({
          type: ActionTypes.LOGOUT
        });
      }
    });

    return () => unsubscribe();
  }, []);

  // Action creators
  const login = (userData) => {
    dispatch({
      type: ActionTypes.LOGIN,
      payload: userData
    });
  };

  const logout = async () => {
    try {
      const { signOutUser } = await import('../services/mockAuthService');
      await signOutUser();
    } catch (error) {
      console.error('Logout error:', error);
      // Still dispatch logout even if signOut fails
      dispatch({
        type: ActionTypes.LOGOUT
      });
    }
  };

  const toggleModule = (moduleId) => {
    dispatch({
      type: ActionTypes.TOGGLE_MODULE,
      payload: { moduleId }
    });
  };

  const updateModuleStatus = (moduleId, enabled) => {
    dispatch({
      type: ActionTypes.UPDATE_MODULE_STATUS,
      payload: { moduleId, enabled }
    });
  };

  // Get enabled modules for students
  const getEnabledModules = () => {
    return Object.values(state.modules).filter(module => module.enabled);
  };

  // Check if user is admin
  const isAdmin = () => {
    return state.user && state.user.role === 'admin';
  };

  // Check if user is student
  const isStudent = () => {
    return state.user && state.user.role === 'student';
  };

  const value = {
    // State
    ...state,
    
    // Actions
    login,
    logout,
    toggleModule,
    updateModuleStatus,
    
    // Computed values
    getEnabledModules,
    isAdmin,
    isStudent
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;

