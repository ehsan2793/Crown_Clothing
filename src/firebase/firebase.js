import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const config = {
    apiKey: "AIzaSyA2CTRu9t74lIJzPSkaEEzh5lyfdsxaBk8",
    authDomain: "crown-cloth-453b1.firebaseapp.com",
    projectId: "crown-cloth-453b1",
    storageBucket: "crown-cloth-453b1.appspot.com",
    messagingSenderId: "758312283404",
    appId: "1:758312283404:web:d09643eac21185a40fed29",
    measurementId: "G-TX1XYDJ8KH",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
