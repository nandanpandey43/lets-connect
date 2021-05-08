import firebase from 'firebase';


const firebaseConfig = {

    // apiKey: "AIzaSyDqeSrycLVU28Mlw8AVtHvxdAoCeP4Y018",
    // authDomain: "whatsapp-clone-d5f0a.firebaseapp.com",
    // projectId: "whatsapp-clone-d5f0a",
    // storageBucket: "whatsapp-clone-d5f0a.appspot.com",
    // messagingSenderId: "529788230654",
    // appId: "1:529788230654:web:6e4e1eff729dba49973eaf",
    // measurementId: "G-ZMM8T36QB3"


    apiKey: "AIzaSyDqeSrycLVU28Mlw8AVtHvxdAoCeP4Y018",
    authDomain: "whatsapp-clone-d5f0a.firebaseapp.com",
    projectId: "whatsapp-clone-d5f0a",
    storageBucket: "whatsapp-clone-d5f0a.appspot.com",
    messagingSenderId: "529788230654",
    appId: "1:529788230654:web:fad0c27eb3ff4375973eaf",
    measurementId: "G-CYK7CSXYMF"


  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;