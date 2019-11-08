import firebase from 'firebase'
import {
        API_KEY,
        AUTH_DOMAIN,
        DATABASE_URL,
        PROJECT_ID,
        MESSAGE_SENDER_ID,
        APP_ID
    } 
from 'react-native-dotenv'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCGnJ1WbV3wNxD2XmFsAJf3_4Fe7kOJWnM',
    authDomain: 'react-firebase-todo-43d7d.firebaseapp.com',
    databaseURL: 'https://react-firebase-todo-43d7d.firebaseio.com',
    projectId: 'react-firebase-todo-43d7d',
    storageBucket: 'react-firebase-todo-43d7d.appspot.com',
    messagingSenderId: '302231234769',
    appId: '1:302231234769:web:640a8539cf645dbb477df0' 
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
    timestampsInSnapshots: true
})

export default Firebase
