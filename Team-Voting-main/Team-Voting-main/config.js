import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCDPFhWoICJeLha-3rBI27uQXnmZKx0JfM",
    authDomain: "hello-d5348.firebaseapp.com",
    projectId: "hello-d5348",
    storageBucket: "hello-d5348.appspot.com",
    messagingSenderId: "110228442237",
    appId: "1:110228442237:web:7edd1d6a21f5d50fa3b514"
  };
// add SDK Firebase
var firebaseConfig = {
   
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();