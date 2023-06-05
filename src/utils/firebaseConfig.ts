// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNsoRzATSs33GpTKmvWgG29MDrKtsGDAw",
  authDomain: "pokemon-project-8b763.firebaseapp.com",
  projectId: "pokemon-project-8b763",
  storageBucket: "pokemon-project-8b763.appspot.com",
  messagingSenderId: "615574522260",
  appId: "1:615574522260:web:32ec56f273414b570b2781",
  measurementId: "G-5CQTQCSN60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB,'users');
export const pokemonListRef = collection(firebaseDB,'pokemonList')