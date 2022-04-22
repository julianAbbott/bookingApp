import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { push } from 'firebase/database'; 
import * as firebase from 'firebase/app';
import * as database from 'firebase/database';
import { set  } from 'firebase/database';
import { ref  } from 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAXuofyNcrmAo3zIs9uyIhMzWxEbw3P-Lo",
  authDomain: "bookingapp-b8d80.firebaseapp.com",
  databaseURL: "https://bookingapp-b8d80-default-rtdb.firebaseio.com",
  projectId: "bookingapp-b8d80",
  storageBucket: "bookingapp-b8d80.appspot.com",
  messagingSenderId: "1037730457995",
  appId: "1:1037730457995:web:03892817b7fd13242f678e"
}; 


const app = initializeApp(firebaseConfig); 
export const databaseRef = getDatabase(app, 'https://bookingapp-b8d80-default-rtdb.firebaseio.com');
// console.log(databaseRef);
// console.log("test");
// const postListRef = ref(databaseRef, 'users/'); //
// const newPostRef = push(postListRef);
// set(newPostRef, {
//   username:"asdf"
// });

// const newPostRef = push(databaseRef, { mytest: "fuck this"});
// set( newPostRef, {
//   author: 'gracehop',
//   title: 'Announcing COBOL, a New Programming Language'
// });
