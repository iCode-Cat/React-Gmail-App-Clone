import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Firebase configuration
const firebaseConfig  = {
    apiKey: "AIzaSyA9WyJb-nasuM3WcfGAIv8oNHwYqpNi5jE",
    authDomain: "clone-bcdae.firebaseapp.com",
    projectId: "clone-bcdae",
    storageBucket: "clone-bcdae.appspot.com",
    messagingSenderId: "509739520726",
    appId: "1:509739520726:web:922208455cf9922d582f77"
}

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


 export const auth = firebase.auth();
 export const firestore =  firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
  export default firebase;