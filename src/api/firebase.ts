import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig: firebase.FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_MAP_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_Auth_Domain as string,
  projectId: process.env.NEXT_PUBLIC_Project_ID as string,
  appId: process.env.NEXT_PUBLIC_App_ID as string,
  measurementId: process.env.NEXT_PUBLIC_Mesuare_ID as string,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
