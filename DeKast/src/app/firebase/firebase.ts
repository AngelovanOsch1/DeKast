import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyC3l87sKSzjpus0yJEQflosqq2mhKKF-QQ',
  authDomain: 'dekast-89494.firebaseapp.com',
  projectId: 'dekast-89494',
  storageBucket: 'dekast-89494.appspot.com',
  messagingSenderId: '194514525090',
  appId: '1:194514525090:web:1fb81d5b96d89ac38cf0fb',
  measurementId: 'G-QX6P8HDT0G',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
