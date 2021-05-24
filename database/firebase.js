import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCVfxzJvOxBkEBIDGybDLNpQs9GHsInkyE",
    authDomain: "whattoday-c2b35.firebaseapp.com",
    projectId: "whattoday-c2b35",
    storageBucket: "whattoday-c2b35.appspot.com",
    messagingSenderId: "929107243567",
    appId: "1:929107243567:web:0321f0ddaa9e3b8ae90cda",
    measurementId: "G-P8DJ892W0M"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export { auth };
