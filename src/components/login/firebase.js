// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCy4WhZgJjUhh7hg4Vjc9mL78UMxrhRIVI',
  authDomain: 'react-hw-6.firebaseapp.com',
  projectId: 'react-hw-6',
  storageBucket: 'react-hw-6.firebasestorage.app',
  messagingSenderId: '636213566491',
  appId: '1:636213566491:web:e62aec0223481461d56cbe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
