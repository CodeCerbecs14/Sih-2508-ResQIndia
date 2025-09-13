import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../config/firebase';


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


export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    

    let role = 'student';
    let name = user.email.split('@')[0];
    
    if (email === PREDEFINED_CREDENTIALS.admin.email) {
      role = 'admin';
      name = PREDEFINED_CREDENTIALS.admin.name;
    } else if (email === PREDEFINED_CREDENTIALS.student.email) {
      role = 'student';
      name = PREDEFINED_CREDENTIALS.student.name;
    }
    
    return {
      uid: user.uid,
      email: user.email,
      name: name,
      role: role,
      loginTime: new Date().toISOString()
    };
  } catch (error) {
    throw new Error(getErrorMessage(error.code));
  }
};


export const signUp = async (email, password, name, role) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    return {
      uid: user.uid,
      email: user.email,
      name: name,
      role: role,
      signupTime: new Date().toISOString()
    };
  } catch (error) {
    throw new Error(getErrorMessage(error.code));
  }
};


export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error('Failed to sign out');
  }
};


export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {

      let role = 'student';
      let name = user.email.split('@')[0];
      
      if (user.email === PREDEFINED_CREDENTIALS.admin.email) {
        role = 'admin';
        name = PREDEFINED_CREDENTIALS.admin.name;
      } else if (user.email === PREDEFINED_CREDENTIALS.student.email) {
        role = 'student';
        name = PREDEFINED_CREDENTIALS.student.name;
      }
      
      callback({
        uid: user.uid,
        email: user.email,
        name: name,
        role: role,
        loginTime: new Date().toISOString()
      });
    } else {
      callback(null);
    }
  });
};


const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'No user found with this email address';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/user-disabled':
      return 'This account has been disabled';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection';
    default:
      return 'Authentication failed. Please try again';
  }
};


export const quickLoginStudent = () => {
  return signIn(PREDEFINED_CREDENTIALS.student.email, PREDEFINED_CREDENTIALS.student.password);
};


export const quickLoginAdmin = () => {
  return signIn(PREDEFINED_CREDENTIALS.admin.email, PREDEFINED_CREDENTIALS.admin.password);
};
