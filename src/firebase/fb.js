import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCrncuNTXLxf4nXB3aUZgi4FOg6L0k4NbI",
  authDomain: "comicweek-bc6de.firebaseapp.com",
  databaseURL: "https://comicweek-bc6de.firebaseio.com",
  projectId: "comicweek-bc6de",
  storageBucket: "comicweek-bc6de.appspot.com",
  messagingSenderId: "323757243240"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings( { timestampsInSnapshots: true } )

const db = firebaseApp.firestore();
export default db;