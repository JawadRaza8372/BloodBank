import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage";
  var firebaseConfig = {
    apiKey: "AIzaSyDlnHunpCQC2soB5jbCPabp0CJO7Qtwmu0",
    authDomain: "problood-793c3.firebaseapp.com",
    databaseURL: "https://problood-793c3.firebaseio.com",
    projectId: "problood-793c3",
    storageBucket: "problood-793c3.appspot.com",
    messagingSenderId: "898839605351",
    appId: "1:898839605351:web:02d7c3fe5ac5777ee4e4c2"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  const db=firebase.firestore();
  export default firebase;
  export {db};