import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const configureFirebase = async () => {
  const env = process.env.NODE_ENV;
  if (env === "development") {
    firebase.initializeApp({
      apiKey: "AIzaSyAmRhRIOe8WbDkXl62Rfro2pArEiLURJbg",
      authDomain: "todo-list-2a9a7.firebaseapp.com",
      projectId: "todo-list-2a9a7",
    });
  } else {
    const response = await fetch("/__/firebase/init.json");
    const config = await response.json();
    firebase.initializeApp(config);
  }
};
export default configureFirebase;
