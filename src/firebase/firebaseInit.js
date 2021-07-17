/* jshint esversion: 6 */

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB_Pglj1wKpXkON8JyRZoZzNkoNRCfirY4",
    authDomain: "fireblogs-ps09.firebaseapp.com",
    projectId: "fireblogs-ps09",
    storageBucket: "fireblogs-ps09.appspot.com",
    messagingSenderId: "68031626871",
    appId: "1:68031626871:web:a0632dcf55d00c632d9072"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();