/* jshint esversion: 6 */

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBurN4UnZqMQypJ5PTgrrRG1F3WwkOlUig",
    authDomain: "techno-report.firebaseapp.com",
    projectId: "techno-report",
    storageBucket: "techno-report.appspot.com",
    messagingSenderId: "7890891905",
    appId: "1:7890891905:web:4f2eae8ebc59c72c02c980"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default {firebaseApp};