import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBB8Q1LTdDrOcnb7NIsUWGVOSLczfSU_dk",
    authDomain: "crwn-db-3f331.firebaseapp.com",
    projectId: "crwn-db-3f331",
    storageBucket: "crwn-db-3f331.appspot.com",
    messagingSenderId: "1074442669098",
    appId: "1:1074442669098:web:455e7213c0cebc8d0e0753",
    measurementId: "G-XS75N5VKGZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
