// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBOugU4jR20VehanZk0P_Myr5KoNwJlCWI',
  authDomain: 'insta-2-yt-bbf9f.firebaseapp.com',
  projectId: 'insta-2-yt-bbf9f',
  storageBucket: 'insta-2-yt-bbf9f.appspot.com',
  messagingSenderId: '605063290321',
  appId: '1:605063290321:web:bf1702e5b693c41a6cd4f0',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
