import firebase  from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCIJgoZrvManJr-saqYMBLVSmyuhUc_z18",
    authDomain: "vue-mini-blog.firebaseapp.com",
    projectId: "vue-mini-blog",
    storageBucket: "vue-mini-blog.appspot.com",
    messagingSenderId: "475955649732",
    appId: "1:475955649732:web:8123fc2620f990269c7d91"
};

//init firebase

firebase.initializeApp(firebaseConfig)

//init firestore service

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { projectFirestore, timestamp }