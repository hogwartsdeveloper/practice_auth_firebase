import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD90Ges5g0rWENIMBQd363Q4GehNxVLJuI",
  authDomain: "animal-pedia.firebaseapp.com",
  projectId: "animal-pedia",
  storageBucket: "animal-pedia.appspot.com",
  messagingSenderId: "481105680294",
  appId: "1:481105680294:web:146755a98fbcdada512167",
  measurementId: "G-0ZQD2HEFH9"
};

let app;
if (firebase.getApps().length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = getAuth(app)

export { auth };