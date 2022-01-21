import { initializeApp } from 'firebase/app';

import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	serverTimestamp,
	doc,
	orderBy,
	limit,
	onSnapshot,
	query,
} from 'firebase/firestore';

import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDZWouBG5uhPLGumriMBlr6ZTTCwc340xk',
	authDomain: 'clone-gm-2c950.firebaseapp.com',
	projectId: 'clone-gm-2c950',
	storageBucket: 'clone-gm-2c950.appspot.com',
	messagingSenderId: '220173026642',
	appId: '1:220173026642:web:ce6894c9860797aedfa68b',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export {
	db,
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	serverTimestamp,
	doc,
	auth,
	orderBy,
	limit,
	onSnapshot,
	query,
	googleProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
};
