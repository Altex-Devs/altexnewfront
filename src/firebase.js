import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBI-PYvc6u-tDfVwP8lrMm3jY98nZQfeqg",
  authDomain: "altexmn.firebaseapp.com",
  projectId: "altexmn",
  storageBucket: "altexmn.appspot.com",
  appId: "1:914580356684:web:ce9a90dfae927a587efee9",
  measurementId: "G-K9WWL9DY80"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);