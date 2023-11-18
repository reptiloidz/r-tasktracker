// todo
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDhXISafxjuQ4Vg_NY4_m4BkJb7Mrfeqrk",
	authDomain: "r-tasktracker-c4297.firebaseapp.com",
	databaseURL: "https://r-tasktracker-c4297-default-rtdb.firebaseio.com",
	projectId: "r-tasktracker-c4297",
	storageBucket: "r-tasktracker-c4297.appspot.com",
	messagingSenderId: "655592344041",
	appId: "1:655592344041:web:58d949e6aba23103012378"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const db = firebase.firestore();
export {db, database};