import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1TaV0zDVN39hagwXqG4VoUszBZRmpU2o",
    authDomain: "cc-fashion-db.firebaseapp.com",
    databaseURL: "https://cc-fashion-db.firebaseio.com",
    projectId: "cc-fashion-db",
    storageBucket: "cc-fashion-db.appspot.com",
    messagingSenderId: "518522623448",
    appId: "1:518522623448:web:37ec9a2698325086e54ead",
    measurementId: "G-03NQXW4YR2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;