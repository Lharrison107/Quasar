import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFvn5BbNJQJMCV89vzZph_ramBeudDDx8",
  authDomain: "awesome-todo-107hj.firebaseapp.com",
  databaseURL: "https://awesome-todo-107hj-default-rtdb.firebaseio.com",
  projectId: "awesome-todo-107hj",
  storageBucket: "awesome-todo-107hj.appspot.com",
  messagingSenderId: "53208097060",
  appId: "1:53208097060:web:cae6c3e4005bf04f5653b1"
};

const firebaseApp = initializeApp(firebaseConfig)

// const firebaseAuth = firebaseApp.auth()

export {firebaseApp}