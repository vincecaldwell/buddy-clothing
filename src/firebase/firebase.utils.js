import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfdgY5neGNPlIaqv4IaUEM6Il-DeYDNv4",
    authDomain: "buddy-db-a5f7a.firebaseapp.com",
    databaseURL: "https://buddy-db-a5f7a.firebaseio.com",
    projectId: "buddy-db-a5f7a",
    storageBucket: "buddy-db-a5f7a.appspot.com",
    messagingSenderId: "734026047901",
    appId: "1:734026047901:web:d2dba37f293eed3c41cf74",
    measurementId: "G-9W6XDT5K16"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;