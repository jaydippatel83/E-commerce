import firebase from 'firebase' 
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email,photoURL } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                photoURL,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);

        }
    }
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;