import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtJVNGzRic7QL5NwSux1viw5kxAP_X4iY",
    authDomain: "bbq-login-auth.firebaseapp.com",
    projectId: "bbq-login-auth",
    storageBucket: "bbq-login-auth.appspot.com",
    messagingSenderId: "188635112340",
    appId: "1:188635112340:web:1e4704f97dfa1753906581"

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
