import firebase from 'firebase/app'; //pulling from firebase library 
import 'firebase/firestore'; // for database 
import 'firebase/auth'; //for Authenticaton

const configFirebase =  {
    apiKey: "AIzaSyBX1lCctbd9OsBOPMXExGMSvz4Ozl2EzBc",
    authDomain: "aa-db-c0f13.firebaseapp.com",
    databaseURL: "https://aa-db-c0f13.firebaseio.com",
    projectId: "aa-db-c0f13",
    storageBucket: "aa-db-c0f13.appspot.com",
    messagingSenderId: "592378252197",
    appId: "1:592378252197:web:1cd98ad91f56156e27764c",
    measurementId: "G-X7F5MW7V6Q"
  };

  firebase.initializeApp(configFirebase);

  export const auth = firebase.auth(); //pulled from firebase auth so we can use anytime we need by calling auth variable 
  export const firestore = firebase.firestore(); //pulled from firebase to store data 


  const provider = new firebase.auth.GoogleAuthProvider(); // gives access to googleauthprovider class from auth library 

  provider.setCustomParameters({ prompt: 'select_account'}); // we always want to get google account popup before siging in to the account 

  export const sigInWithGoogleAccount = ()=> auth.signInWithPopup(provider); //we want to use only google(provider) account to be able to signin to the account . You can also add other twitter facebook etc account 

  export default firebase;


