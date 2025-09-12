// Mock authentication service to simulate Firebase behavior for testing


// Setting up hardcoded student and admin accounts used for quick testing
export const PREDEFINED_CREDENTIALS = {
  student: {
    email: 'student@disastermanagement.com',
    password: 'student123',
    role: 'student',
    name: 'Test Student'
  },
  admin: {
    email: 'admin@disastermanagement.com',
    password: 'admin123',
    role: 'admin',
    name: 'System Admin'
  }
};

let currentUser = null;
let authListeners = [];

export const onAuthStateChange = (callback) => {
  authListeners.push(callback);
 
  if (currentUser) {
    callback(currentUser);
  }
  
   // Return a function to remove the listener later
  return () => {
    const index = authListeners.indexOf(callback);
    if (index > -1) {
      authListeners.splice(index, 1);
    }
  };
};

// Notify all registered listeners whenever the auth state changes
const notifyAuthStateChange = (user) => {
  authListeners.forEach(callback => callback(user));
};

// Simulate sign-in with email and password (mimics Firebase login)
export const signIn = async (email, password) => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      
      if (email === PREDEFINED_CREDENTIALS.student.email && password === PREDEFINED_CREDENTIALS.student.password) {
        const userData = {
          uid: 'mock-student-uid',
          email: email,
          name: PREDEFINED_CREDENTIALS.student.name,
          role: 'student',
          loginTime: new Date().toISOString()
        };
        currentUser = userData;
        notifyAuthStateChange(userData);
        resolve(userData);
      } else if (email === PREDEFINED_CREDENTIALS.admin.email && password === PREDEFINED_CREDENTIALS.admin.password) {
        const userData = {
          uid: 'mock-admin-uid',
          email: email,
          name: PREDEFINED_CREDENTIALS.admin.name,
          role: 'admin',
          loginTime: new Date().toISOString()
        };
        currentUser = userData;
        notifyAuthStateChange(userData);
        resolve(userData);
      } else {
        
        if (email && password && password.length >= 6) {
          const userData = {
            uid: `mock-${Date.now()}`,
            email: email,
            name: email.split('@')[0],
            role: email.includes('admin') ? 'admin' : 'student',
            loginTime: new Date().toISOString()
          };
          currentUser = userData;
          notifyAuthStateChange(userData);
          resolve(userData);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }
    }, 1000); 
  });
};

// Simulate user registration with email, password, and role
export const signUp = async (email, password, name, role) => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      
      if (!email || !password || !name) {
        reject(new Error('Please fill in all fields'));
        return;
      }
      
      if (password.length < 6) {
        reject(new Error('Password must be at least 6 characters long'));
        return;
      }
      
      
      if (email === PREDEFINED_CREDENTIALS.student.email || email === PREDEFINED_CREDENTIALS.admin.email) {
        reject(new Error('An account with this email already exists'));
        return;
      }
      
      const userData = {
        uid: `mock-${Date.now()}`,
        email: email,
        name: name,
        role: role || 'student',
        signupTime: new Date().toISOString()
      };
      
      currentUser = userData;
      notifyAuthStateChange(userData);
      resolve(userData);
    }, 1000); 
  });
};

// Simulating logging out the current user
export const signOutUser = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      currentUser = null;
      notifyAuthStateChange(null);
      resolve();
    }, 500);
  });
};

// One-click login helpers for predefined accounts
export const quickLoginStudent = () => {
  return signIn(PREDEFINED_CREDENTIALS.student.email, PREDEFINED_CREDENTIALS.student.password);
};

export const quickLoginAdmin = () => {
  return signIn(PREDEFINED_CREDENTIALS.admin.email, PREDEFINED_CREDENTIALS.admin.password);
};

// Retrieve the currently signed-in mock user
export const getCurrentUser = () => {
  return currentUser;
};


