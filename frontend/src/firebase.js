import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
    
const firebaseConfig = {
    apiKey: "AIzaSyBtJVNGzRic7QL5NwSux1viw5kxAP_X4iY",
    authDomain: "bbq-login-auth.firebaseapp.com",
    projectId: "bbq-login-auth",
    storageBucket: "bbq-login-auth.appspot.com",
    messagingSenderId: "188635112340",
    appId: "1:188635112340:web:1e4704f97dfa1753906581"

};
//project-188635112340

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider(); // Adicione esta linha

export default firebase;