import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCTZc3zE57QyXzCf-0u7q3v56Syi8Q2qz8",
    authDomain: "wechat-af984.firebaseapp.com",
    projectId: "wechat-af984",
    storageBucket: "wechat-af984.appspot.com",
    messagingSenderId: "847926070741",
    appId: "1:847926070741:web:57064a05a8963c6c2dc15c"
  }).auth();