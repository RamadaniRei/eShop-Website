import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe6pZO1mnW6LUmOc0ypqZu3n1Jq-cXY8U",
  authDomain: "eshop-9afae.firebaseapp.com",
  projectId: "eshop-9afae",
  storageBucket: "eshop-9afae.appspot.com",
  messagingSenderId: "925359511413",
  appId: "1:925359511413:web:800af905be8b0f808fa53c",
  measurementId: "G-CDCD96QD5N",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
