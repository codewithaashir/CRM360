import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXvF4AN8vKvZ4LBGzmUprDPesk2pnMBEQ",
    authDomain: "crm360pk.firebaseapp.com",
    databaseURL: "https://crm360pk.firebaseio.com",
    projectId: "crm360pk",
    storageBucket: "crm360pk.appspot.com",
    messagingSenderId: "3694494158",
    appId: "1:3694494158:web:2555a8e26ff471a4fd6b9f",
    measurementId: "G-JHETRHEDB2"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
    "BCj6WheIOU5GFENO-3cDuDvqogy7MCUMP5ENjbUbUs6E58qIbPSY0mPG2NT2sXu4dH258oDSiEJPLJ4w5p9woMo"
);
export { messaging };