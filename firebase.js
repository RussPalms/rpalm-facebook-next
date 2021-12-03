// import firebase from "firebase";
import firebase from "firebase/compat/app";
// import { initializeApp, getApps, getApp } from "@firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// import "firestore/storage";
import "firebase/compat/storage";

import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDeQqdJSwopn4IDPdbWIhC4uqYvmIVweC8",
	authDomain: "rpalm-facebook.firebaseapp.com",
	projectId: "rpalm-facebook",
	storageBucket: "rpalm-facebook.appspot.com",
	messagingSenderId: "945157819930",
	appId: "1:945157819930:web:491880a967fc1d5d6d0ba3",
};

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
// const storage = getStorage();

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
