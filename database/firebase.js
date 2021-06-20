import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
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
const db = fire.firestore();
const fbStorage = fire.storage();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { fire, auth, db, fbStorage, timeStamp };

export const createUserDocument = async (user, userNameData, fullNameData) => {
    if (!user) return;
    console.log(user.uid);
    console.log('additional', userNameData, fullNameData);

    const userRef = db.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const userName = userNameData;
        const fullName = fullNameData;
        const id = user.uid;

        try {
            userRef.set({
                id: id,
                username: userName,
                name: fullName,
                createdAt: new Date(),
            })
        } catch (error) {
            console.log('Error in creating user', error);
        }
    }
}
